import React, { useState, useEffect } from 'react';
import {
    FiDownload,
    FiClock,
    FiCalendar,
    FiList,
    FiZap,
    FiShield,
    FiMonitor,
    FiSmartphone,
    FiGithub,
    FiCheckCircle,
    FiPlay,
    FiUsers,
    FiTrendingUp,
    FiAward,
    FiBarChart2
} from 'react-icons/fi';

import config from '../assets/config.png'
import task from '../assets/task.png'
import template from '../assets/template.png'
import timelog from '../assets/timelog.png'
import logo from '../assets/appicon.png';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface TutorialStep {
    title: string;
    description: string;
    image: string;
    details: string[];
}

interface Stat {
    number: string;
    label: string;
}

interface Benefit {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface FAQ {
    q: string;
    a: string;
}

const NaipeLoggerLanding: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features: Feature[] = [
        {
            icon: <FiClock className="w-8 h-8" />,
            title: "Lançamento Automático",
            description: "Distribua horas automaticamente entre múltiplas tarefas e projetos com apenas alguns cliques."
        },
        {
            icon: <FiCalendar className="w-8 h-8" />,
            title: "Calendário Inteligente",
            description: "Visualize suas horas logadas em um calendário mensal intuitivo, respeitando feriados brasileiros."
        },
        {
            icon: <FiList className="w-8 h-8" />,
            title: "Templates Reutilizáveis",
            description: "Crie templates de tarefas para sprints recorrentes e aplique-os rapidamente."
        },
        {
            icon: <FiZap className="w-8 h-8" />,
            title: "Interface Otimizada",
            description: "Interface moderna e responsiva que torna o apontamento de horas uma tarefa simples e rápida."
        },
        {
            icon: <FiShield className="w-8 h-8" />,
            title: "Seguro e Local",
            description: "Seus dados ficam seguros no seu computador com criptografia AES-256."
        },
        {
            icon: <FiBarChart2 className="w-8 h-8" />,
            title: "Relatórios Avançados",
            description: "Exporte relatórios detalhados em PDF e acompanhe suas métricas de produtividade."
        }
    ];

    const tutorialSteps: TutorialStep[] = [
        {
            title: "1. Configuração Inicial",
            description: "Faça login com suas credenciais do Teamwork OneBrain",
            image: config,
            details: [
                "Insira seu email corporativo",
                "Digite sua senha do Teamwork",
                "Conexão automática com teamwork.onebrain.com.br"
            ]
        },
        {
            title: "2. Gerenciar Tarefas",
            description: "Selecione e configure suas tarefas favoritas",
            image: task,
            details: [
                "Filtre tarefas por projeto",
                "Configure múltiplas entradas de tempo",
                "Salve tarefas para reutilização"
            ]
        },
        {
            title: "3. Criar Templates",
            description: "Monte templates para sprints recorrentes",
            image: template,
            details: [
                "Combine múltiplas tarefas",
                "Defina padrões de apontamento",
                "Reutilize em sprints futuras"
            ]
        },
        {
            title: "4. Lançar Horas",
            description: "Distribua horas automaticamente no período desejado",
            image: timelog,
            details: [
                "Selecione o período de trabalho",
                "Aplique templates ou tarefas individuais",
                "Execute o lançamento em lote"
            ]
        }
    ];

    const stats: Stat[] = [
        { number: "95%", label: "Redução no tempo de apontamento" },
        { number: "100+", label: "Horas economizadas pela equipe" },
        { number: "50+", label: "Desenvolvedores usando" },
        { number: "99%", label: "Satisfação dos usuários" }
    ];

    const benefits: Benefit[] = [
        {
            icon: <FiTrendingUp className="w-6 h-6" />,
            title: "Produtividade Aumentada",
            description: "Reduza o tempo gasto com apontamento de horas em mais de 90%"
        },
        {
            icon: <FiUsers className="w-6 h-6" />,
            title: "Feito por Devs, para Devs",
            description: "Criado por desenvolvedores que entendem as dores do processo manual"
        },
        {
            icon: <FiAward className="w-6 h-6" />,
            title: "Qualidade de Vida",
            description: "Menos tempo em tarefas administrativas, mais tempo codando"
        }
    ];

    const faqs: FAQ[] = [
        {
            q: "O Naipe Logger é seguro?",
            a: "Sim! Seus dados ficam apenas no seu computador, criptografados com AES-256. Não enviamos nenhuma informação para servidores externos."
        },
        {
            q: "Funciona com qualquer instância do Teamwork?",
            a: "Atualmente está otimizado para teamwork.onebrain.com.br, mas pode ser adaptado para outras instâncias."
        },
        {
            q: "Preciso pagar para usar?",
            a: "Não! O Naipe Logger é 100% gratuito e open source."
        },
        {
            q: "Como posso contribuir com o projeto?",
            a: "Acesse nosso repositório no GitHub, reporte bugs, sugira melhorias ou contribua com código!"
        }
    ];

    const handleDownload = (platform: 'windows' | 'linux' | 'windows-direct') => {
        const downloadUrls = {
            windows: 'https://github.com/eddie-naipes/naipe-logger/releases/latest/download/NaipeLogger-Setup.exe',
            'windows-direct': 'https://github.com/eddie-naipes/naipe-logger/releases/latest/download/teamwork-logger.exe',
            linux: 'https://github.com/eddie-naipes/naipe-logger/releases/latest/download/NaipeLogger-Linux.AppImage'
        };

        window.open(downloadUrls[platform], '_blank');
    };



    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center">
                                <img
                                    src={logo}
                                    alt="Naipe Logger"
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">Naipe Logger</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://github.com/eddie-naipes/naipe-logger"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                                aria-label="GitHub Repository"
                            >
                                <FiGithub className="w-6 h-6" />
                            </a>
                            <button
                                onClick={() => handleDownload('windows')}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
                            >
                                <FiDownload className="w-4 h-4" />
                                <span>Download</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Automatize seu <span className="text-yellow-300">Apontamento</span> no Teamwork
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                            Criado pela Naipe Sync Solutions para otimizar o tempo dos desenvolvedores.
                            Lance horas em múltiplos dias e projetos com apenas alguns cliques.

                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => handleDownload('windows')}
                                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
                            >
                                <FiDownload className="w-5 h-5" />
                                <span>Download Gratuito</span>
                            </button>
                            <button
                                onClick={() => document.getElementById('tutorial')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all"
                            >
                                <FiPlay className="w-5 h-5" />
                                <span>Ver Tutorial</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                O Problema que Todo Dev Conhece
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-400">
                                <p className="text-lg">
                                    💻 Você acabou de finalizar uma sprint inteira
                                </p>
                                <p className="text-lg">
                                    ⏰ Agora precisa apontar 10 dias de trabalho manualmente
                                </p>
                                <p className="text-lg">
                                    😫 Navegar, buscar, preencher... para cada dia, cada tarefa
                                </p>
                                <p className="text-lg">
                                    🔄 E repetir isso toda semana...
                                </p>
                            </div>
                            <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg">
                                <p className="text-red-700 dark:text-red-300 font-semibold">
                                    "Gastamos mais tempo apontando horas do que devíamos gastar codando!"
                                </p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Nossa Solução
                            </h3>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                                            <div className="text-green-600 dark:text-green-400">
                                                {benefit.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Recursos Poderosos
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Tudo que você precisa para automatizar completamente seu apontamento de horas
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                                    <div className="text-blue-600 dark:text-blue-400">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="tutorial" className="bg-gray-50 dark:bg-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Como Usar em 4 Passos
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Do login ao lançamento automático em minutos
                        </p>
                    </div>

                    {/* Screenshot Display - Agora no topo */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12">
                        <div className="rounded-lg overflow-hidden">
                            <img
                                src={tutorialSteps[activeStep].image}
                                alt={`Screenshot: ${tutorialSteps[activeStep].title}`}
                                className="w-full h-auto max-h-[600px] object-contain mx-auto"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                    if (fallback) fallback.style.display = 'flex';
                                }}
                            />
                            <div
                                className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96 items-center justify-center"
                                style={{ display: 'none' }}
                            >
                                <div className="text-center">
                                    <FiMonitor className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Screenshot: {tutorialSteps[activeStep].title}
                                    </p>
                                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                                        (Imagem não encontrada em assets/)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Steps Navigation - Agora em baixo em grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {tutorialSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg cursor-pointer transition-all ${
                                    activeStep === index
                                        ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-600'
                                        : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-transparent'
                                }`}
                                onClick={() => setActiveStep(index)}
                            >
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                                    {step.description}
                                </p>
                                <div className="space-y-1">
                                    {step.details.map((detail, detailIndex) => (
                                        <div key={detailIndex} className="flex items-center space-x-2 text-xs">
                                            <FiCheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                            <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Pronto para Economizar Horas?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Baixe gratuitamente e comece a usar hoje mesmo
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                            <FiMonitor className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Windows</h3>
                            <p className="text-blue-100 mb-4">Windows 10/11 x64</p>
                            <button
                                onClick={() => handleDownload('windows')}
                                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold w-full flex items-center justify-center space-x-2 transition-colors"
                            >
                                <FiDownload className="w-5 h-5" />
                                <span>Download .exe</span>
                            </button>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                            <FiSmartphone className="w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Linux</h3>
                            <p className="text-blue-100 mb-4">Ubuntu/Debian x64</p>
                            <button
                                onClick={() => handleDownload('linux')}
                                className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold w-full flex items-center justify-center space-x-2 transition-colors"
                            >
                                <FiDownload className="w-5 h-5" />
                                <span>Download AppImage</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl max-w-2xl mx-auto">
                        <h3 className="text-lg font-semibold mb-3">Requisitos do Sistema</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-100">
                            <div>
                                <h4 className="font-medium text-white">Windows:</h4>
                                <ul className="space-y-1">
                                    <li>• Windows 10/11</li>
                                    <li>• 4GB RAM mínimo</li>
                                    <li>• 100MB espaço em disco</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-white">Linux:</h4>
                                <ul className="space-y-1">
                                    <li>• Ubuntu 18.04+ ou similar</li>
                                    <li>• 4GB RAM mínimo</li>
                                    <li>• 100MB espaço em disco</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-800 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        Perguntas Frequentes
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt="Naipe Logger"
                                        className="h-12 w-auto object-contain"
                                    />
                                </div>
                                <span className="text-xl font-bold">Naipe Logger</span>
                            </div>
                            <p className="text-gray-400">
                                Ferramenta criada pela Naipe Sync Solutions para otimizar o apontamento de horas no Teamwork.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
                            <div className="space-y-2">
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                                    Documentação
                                </a>
                                <a href="https://github.com/eddie-naipes/naipe-logger" className="block text-gray-400 hover:text-white transition-colors">
                                    GitHub
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                                    Suporte
                                </a>
                                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                                    Releases
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Naipe Sync Solutions</h3>
                            <p className="text-gray-400 mb-4">
                                Soluções inovadoras em tecnologia
                            </p>
                            <a
                                href="https://onebrain.com.br"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                            >
                                onebrain.com.br
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Naipe Sync Solutions. Todos os direitos reservados.</p>
                        <p className="mt-2 text-sm">
                            Naipe Logger é um projeto open source licenciado sob MIT License.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NaipeLoggerLanding;