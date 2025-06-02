import type {NextApiRequest, NextApiResponse} from 'next';

interface Asset {
    name: string;
    browser_download_url: string;
    size: number;
}

interface ReleaseData {
    tag_name: string;
    published_at: string;
    body: string | null;
    name: string;
    assets: Asset[];
}

interface DownloadInfo {
    url: string;
    size: number;
    checksum: string;
}

interface UpdateInfo {
    version: string;
    releaseDate: string;
    description: string;
    downloads: {
        windows: DownloadInfo | null;
        linux: DownloadInfo | null;
    };
    critical: boolean;
}

interface ErrorResponse {
    error: string;
    details?: string;
}

const GITHUB_API_URL = 'https://api.github.com/repos/eddie-naipes/naipe-logger/releases/latest';
const CRITICAL_KEYWORDS = ['critical', 'security', 'hotfix'];

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<UpdateInfo | ErrorResponse>
): Promise<void> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const githubResponse = await fetch(GITHUB_API_URL, {
            headers: {
                'User-Agent': 'Naipe-Logger-Updater',
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!githubResponse.ok) {
            throw new Error(`GitHub API error: ${githubResponse.status}`);
        }

        const releaseData: ReleaseData = await githubResponse.json();

        const windowsAsset = releaseData.assets.find(asset =>
            asset.name.toLowerCase().includes('.exe') ||
            asset.name.toLowerCase().includes('windows')
        );

        const linuxAsset = releaseData.assets.find(asset =>
            asset.name.toLowerCase().includes('.appimage') ||
            asset.name.toLowerCase().includes('linux')
        );

        const releaseBody = releaseData.body?.toLowerCase() || '';
        const releaseName = releaseData.name?.toLowerCase() || '';
        const isCritical = CRITICAL_KEYWORDS.some(keyword =>
            releaseBody.includes(keyword) || releaseName.includes(keyword)
        );

        const updateInfo: UpdateInfo = {
            version: releaseData.tag_name,
            releaseDate: releaseData.published_at,
            description: releaseData.body || 'Nova versão disponível',
            downloads: {
                windows: windowsAsset ? {
                    url: windowsAsset.browser_download_url,
                    size: windowsAsset.size,
                    checksum: ''
                } : null,
                linux: linuxAsset ? {
                    url: linuxAsset.browser_download_url,
                    size: linuxAsset.size,
                    checksum: ''
                } : null
            },
            critical: isCritical
        };

        console.log('Update info generated:', {
            version: updateInfo.version,
            windowsAvailable: Boolean(updateInfo.downloads.windows),
            linuxAvailable: Boolean(updateInfo.downloads.linux),
            critical: updateInfo.critical
        });

        res.status(200).json(updateInfo);

    } catch (error) {
        console.error('Error fetching update info:', error);
        res.status(500).json({
            error: 'Failed to fetch update information',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}