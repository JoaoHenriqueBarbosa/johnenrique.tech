export const projects = [
    {
        slug: "membot",
        title: "MemBot",
        description: "An AI-powered personal assistant that helps you manage your finances, journal your thoughts, and track your daily activities. 🧠💰📝",
        url: "https://membot.vercel.app",
        github: "https://github.com/JoaoHenriqueBarbosa/MemBot",
        readme: "https://raw.githubusercontent.com/JoaoHenriqueBarbosa/MemBot/main/README.md",
        cover: "membot-cover.webp",
        images: [
            "en.membot1.png",
            "en.membot2.png",
        ],
        features: [
            "Financial tracking and analysis",
            "AI-powered journaling",
            "Multi-language support (English and Portuguese)",
            "Customizable categories for entries",
            "Detailed transaction history"
        ]
    }
]

export default projects;

export type Project = (typeof projects)[number];
