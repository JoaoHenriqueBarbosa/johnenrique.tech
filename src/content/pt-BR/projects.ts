export const projects = [
    {
        slug: "membot",
        title: "MemBot",
        description: "Um assistente pessoal alimentado por IA que ajuda você a gerenciar suas finanças, registrar seus pensamentos e acompanhar suas atividades diárias. 🧠💰📝",
        url: "https://membot.vercel.app",
        github: "https://github.com/JoaoHenriqueBarbosa/MemBot",
        readme: "https://raw.githubusercontent.com/JoaoHenriqueBarbosa/MemBot/main/README.ptBR.md",
        cover: "membot-cover.webp",
        images: [
            "pt-BR.membot1.png",
            "pt-BR.membot2.png",
        ],
        features: [
            "Acompanhamento e análise financeira",
            "Diário alimentado por IA",
            "Suporte a múltiplos idiomas (inglês e português)",
            "Categorias personalizáveis para entradas",
            "Histórico detalhado de transações"
        ]
    }
]

export default projects;

export type Project = (typeof projects)[number];
