// ============================================================================
// IMPORTS - Icon components from lucide-react
// ============================================================================
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    Code2,
    Terminal,
    Cpu,
    Globe,
    Database,
    Layout,
    Server,
    Smartphone,
    Figma,
    GitBranch,
    Cloud,
    Box,
    Layers,
    Monitor,
    Award,
    BookOpen,
    Briefcase,
    User,
    Send
} from 'lucide-react';

// ============================================================================
// PERSONAL INFORMATION - Basic profile details and social links
// ============================================================================
export const personalInfo = {
    name: "Nilanjan Nayak",
    role: "Full Stack Developer",
    shortRole: "Dev",
    location: "India",
    email: "nilanjan@example.com", // TODO: Update with real email
    resumeUrl: "public/Nilajan Nayak.pdf", // TODO: Update with real resume URL
    social: [
        { icon: Github, url: "https://github.com/Nilanjan-Nayak", label: "GitHub" },
        { icon: Linkedin, url: "https://www.linkedin.com/in/nilanjan-nayak-73b475322/overlay/contact-info/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BD1ft0KEzQY6kECT7CBgilQ%3D%3D", label: "LinkedIn" },

        { icon: Mail, url: "mailto:nayaknilanjan2@gmail.com", label: "Email" }
    ]
};

// ============================================================================
// HERO SECTION - Landing page content
// ============================================================================
export const heroData = {
    headline: {
        prefix: "NILANJAN",
        highlight: "NAYAK"
    },
    description: [
        "I craft high-performance web experiences with precision, elegance, and purpose.",
        "Specializing in React, Node.js, and modern web technologies to turn complex problems into simple, beautiful solutions."
    ],
    stats: [
        { value: "5+", label: "Years Exp" },
        { value: "50+", label: "Projects" },
        { value: "100%", label: "Commitment" }
    ],
    featuredProjects: [
        { name: "E-Commerce AI", tech: "Next.js + OpenAI", year: "2024", image: "—Pngtree—n circle letter initial logo_4835121_processed.png" },
        { name: "Crypto Dashboard", tech: "React + D3", year: "2023", image: "IMG-20251021-WA0067.jpg" },
        { name: "SaaS ", tech: "Vue + Firebase", year: "2023", image: "IMG-20251021-WA0067.jpg" },
        { name: " Platform", tech: "Vue + Firebase", year: "2023", image: "IMG-20251021-WA0067.jpg" },
        { name: "Saform", tech: "Vue + Firebase", year: "2023", image: "IMG-20251021-WA0067.jpg" },
        { name: "Sarm", tech: "Vue + Firebase", year: "2023", image: "IMG-20251021-WA0067.jpg" },
        { name: "form", tech: "Vue + Firebase", year: "2023", image: "IMG-20251021-WA0067.jpg" }
    ]
};

// ============================================================================
// ABOUT SECTION - Professional background and experience
// ============================================================================
export const aboutData = {
    // Profile image
    profileImage: "src/image/IMG-20251021-WA0067.jpg", // TODO: Update with professional headshot

    // Professional summary
    summary: {
        text: [
            "I am a passionate Full Stack Developer with a deep love for creating elegant, efficient, and scalable web applications. My journey began with a curiosity for how things work on the internet, which quickly turned into a career dedicated to building the future of the web.",
            "With over 5 years of experience, I have honed my skills in both frontend and backend technologies. I believe in writing clean, maintainable code and designing user interfaces that are not only visually stunning but also intuitive and accessible."
        ],
        coreCompetencies: [
            "Full Stack Development",
            "UI/UX Design",
            "Cloud Architecture",
            "Performance Optimization",
            "Agile Methodology"
        ]
    },

    // Work experience timeline
    experiences: [
        {
            role: "NILANJAN TATA ",
            company: "Tech Innovations Inc.",
            period: "2022 - Present",
            location: "Remote",
            type: "Full-time",
            description: "Leading a team of developers to build scalable SaaS products. Architected the core platform using Next.js and NestJS, resulting in a 40% improvement in performance.",
            achievements: [
                "Spearheaded the migration from legacy code to a modern microservices architecture.",
                "Implemented CI/CD pipelines that reduced deployment time by 60%.",
                "Mentored junior developers and conducted code reviews to ensure high quality."
            ],
            tech: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
            gradient: "from-[#3066be] to-[#5AA8D6]"
        },
        {
            role: "Frontend Developer",
            company: "Creative Digital Agency",
            period: "2020 - 2022",
            location: "New York, USA",
            type: "Contract",
            description: "Collaborated with designers to bring creative concepts to life. Developed interactive and responsive websites for high-profile clients.",
            achievements: [
                "Developed award-winning websites featured on Awwwards.",
                "Optimized frontend performance, achieving 95+ Lighthouse scores.",
                "Integrated complex animations using GSAP and Framer Motion."
            ],
            tech: ["Vue.js", "GSAP", "Sass", "Firebase"],
            gradient: "from-[#5AA8D6] to-[#00bfff]"
        }
    ],
    internships: [
        {
            role: "NILANJAN TATA ",
            company: "Tech Innovations Inc.",
            period: "2022 - Present",
            location: "Remote",
            type: "Full-time",
            description: "Leading a team of developers to build scalable SaaS products. Architected the core platform using Next.js and NestJS, resulting in a 40% improvement in performance.",
            achievements: [
                "Spearheaded the migration from legacy code to a modern microservices architecture.",
                "Implemented CI/CD pipelines that reduced deployment time by 60%.",
                "Mentored junior developers and conducted code reviews to ensure high quality."
            ],
            tech: ["React", "Node.js", "AWS", "Docker", "TypeScript"],
            gradient: "from-[#3066be] to-[#5AA8D6]"
        },
    ],

    // Science Fair Achievements & Certificates
    scienceFairs: [
        {
            name: "Calcata Technical School Science Fair",
            category: "Robotics & AI",
            achievement: "Gold Medal",
            date: "March 2024",
            description: "Developed an AI-powered autonomous robot for disaster relief operations",
            certificate: "/certificates/nsf-2024.pdf",
            gradient: "from-[#FFD700] to-[#FFA500]",
            icon: "🏅5️⃣"
        },
        {
            name: "State Science Exhibition 2023",
            category: "Computer Science",
            achievement: "First Prize",
            date: "November 2023",
            description: "Created a machine learning model for early disease detection",
            certificate: "/certificates/sse-2023.pdf",
            gradient: "from-[#C0C0C0] to-[#A8A8A8]",
            icon: "🥇"
        },
        {
            name: "Regional Innovation Challenge",
            category: "IoT & Automation",
            achievement: "Best Innovation Award",
            date: "August 2023",
            description: "Smart home automation system using IoT sensors and cloud integration",
            certificate: "/certificates/ric-2023.pdf",
            gradient: "from-[#CD7F32] to-[#8B4513]",
            icon: "🥉"
        },
        {
            name: "Youth Tech Summit 2023",
            category: "Web Development",
            achievement: "Excellence Award",
            date: "June 2023",
            description: "Full-stack e-commerce platform with real-time analytics dashboard",
            certificate: "/certificates/yts-2023.pdf",
            gradient: "from-[#5AA8D6] to-[#3066be]",
            icon: "⭐"
        }
    ],

    // Professional certifications
    certifications: [
        { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
        { name: "Meta Frontend Developer Professional", issuer: "Coursera", year: "2022" },
        { name: "Google UX Design Professional", issuer: "Google", year: "2021" }
    ]
};

// ============================================================================
// PROJECTS SECTION - Portfolio showcase
// ============================================================================
export const projectsData = [
    {
        title: "Nebula - AI Analytics Dashboard",
        description: "A powerful analytics platform powered by AI to visualize complex data streams in real-time. Features predictive modeling and customizable widgets.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=1600&q=80",
        tags: ["React", "Python", "TensorFlow", "D3.js"],
        category: "AI / Data",
        stats: { status: "Live", year: "2024" },
        achievements: ["Processed 1M+ data points", "Reduced latency by 40%"],
        liveUrl: "#",
        githubUrl: "#",
        accent: "#5AA8D6"
    },
    {
        title: "Aether - Decentralized Exchange",
        description: "A next-generation DEX built on Ethereum, offering lightning-fast swaps and liquidity pooling with minimal gas fees.",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?fit=crop&w=1600&q=80",
        tags: ["Solidity", "Web3.js", "Next.js", "Tailwind"],
        category: "Web3 / FinTech",
        stats: { status: "Beta", year: "2023" },
        achievements: ["$5M TVL in first month", "Audited by CertiK"],
        liveUrl: "#",
        githubUrl: "#",
        accent: "#3066be"
    },
    {
        title: "Zenith - Task Management",
        description: "A collaborative workspace for remote teams, integrating video calls, real-time editing, and project tracking in one seamless interface.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?fit=crop&w=1600&q=80",
        tags: ["Vue.js", "Firebase", "WebRTC", "Electron"],
        category: "SaaS / Productivity",
        stats: { status: "v2.0", year: "2023" },
        achievements: ["10k+ Daily Active Users", "Featured on Product Hunt"],
        liveUrl: "#",
        githubUrl: "#",
        accent: "#00bfff"
    }
];

// ============================================================================
// SKILLS SECTION - Technical competencies
// ============================================================================
export const skillsData = {
    // Skill categories with detailed breakdown
    categories: [
        {
            id: 1,
            title: "Frontend",
            icon: Layout,
            size: "lg:col-span-2 lg:row-span-2",
            gradient: "from-[#3066be] to-[#5AA8D6]",
            iconSize: 48,
            skills: [
                { name: "React", level: 95, years: 5, projects: 40 },
                { name: "TypeScript", level: 90, years: 4, projects: 35 },
                { name: "Tailwind", level: 95, years: 3, projects: 50 }
            ]
        },
        {
            id: 2,
            title: "Backend",
            icon: Server,
            size: "lg:col-span-1 lg:row-span-1",
            gradient: "from-[#5AA8D6] to-[#00bfff]",
            iconSize: 32,
            skills: [
                { name: "Node.js", level: 90, years: 4, projects: 30 },
                { name: "Python", level: 85, years: 3, projects: 15 }
            ]
        },
        {
            id: 3,
            title: "Database",
            icon: Database,
            size: "lg:col-span-1 lg:row-span-1",
            gradient: "from-[#00bfff] to-[#3066be]",
            iconSize: 32,
            skills: [
                { name: "PostgreSQL", level: 85, years: 4, projects: 20 },
                { name: "Mongo", level: 80, years: 3, projects: 25 }
            ]
        },
        {
            id: 4,
            title: "DevOps",
            icon: Cloud,
            size: "lg:col-span-2 lg:row-span-1",
            gradient: "from-[#131c80] to-[#3066be]",
            iconSize: 40,
            skills: [
                { name: "AWS", level: 75, years: 3, projects: 10 },
                { name: "Docker", level: 80, years: 3, projects: 20 },
                { name: "CI/CD", level: 85, years: 4, projects: 30 }
            ]
        }
    ],

    // Radar chart data for skill visualization
    radar: [
        { name: "Code Quality", level: 95 },
        { name: "Architecture", level: 90 },
        { name: "UI/UX", level: 85 },
        { name: "Performance", level: 92 },
        { name: "Security", level: 88 },
        { name: "Testing", level: 85 }
    ]
};

// ============================================================================
// CONTACT SECTION - Communication methods
// ============================================================================
export const contactData = {
    methods: [
        {
            icon: Mail,
            label: "Email Me",
            value: "nilanjan@example.com",
            description: "I usually reply within 24 hours",
            link: "mailto:nilanjan@example.com",
            gradient: "from-[#3066be] to-[#5AA8D6]"
        },
        {
            icon: Globe,
            label: "Socials",
            value: "@nilanjan_dev",
            description: "Follow my daily updates",
            link: "https://twitter.com",
            gradient: "from-[#5AA8D6] to-[#00bfff]"
        }
    ]
};

// ============================================================================
// NAVIGATION - Site navigation menu items
// ============================================================================
export const navItems = [
    { id: 'hero', label: 'Home', sectionId: 'hero' },
    { id: 'about', label: 'About', sectionId: 'about' },
    { id: 'projects', label: 'Projects', sectionId: 'projects' },
    { id: 'skills', label: 'Skills', sectionId: 'skills' },
    { id: 'contact', label: 'Contact', sectionId: 'contact' }
];
