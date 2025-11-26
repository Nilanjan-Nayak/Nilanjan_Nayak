// ============================================================================
// IMPORTS - Icon components from lucide-react
// ============================================================================
import {
    Github,
    Linkedin,
    Mail,
    Globe,
    Server,
    Code,
    Cpu,
    Brain
} from 'lucide-react';

import profileImg from '../image/IMG-20251021-WA0067.jpg';
import dreamProjectImg from '../image/Screenshot 2025-08-16 234248.png';

// ============================================================================
// PERSONAL INFORMATION - Basic profile details and social links
// ============================================================================
export const personalInfo = {
    name:        "Nilanjan",
    role:        "Full Stack Developer / Coder",
    shortRole:   "Dev",
    location:    "Bishnupur, West Bengal, India",
    email:       "nayaknilanjan2@gmail.com",
    resumeUrl:   "/Nilajan Nayak.pdf",
    social: [
        { icon: Github, url: "https://github.com/Nilanjan-Nayak", label: "GitHub" },
        { icon: Linkedin, url: "https://www.linkedin.com/in/nilanjan-nayak", label: "LinkedIn" },
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
        { value: "3+", label: "Years Exp" },
        { value: "10+", label: "Projects" },
        { value: "5k+", label: "Lines of Code" }
    ],
    featuredProjects: [
        {
            name: "Star Ai lab",
            tech: "React + AI",
            year: "2024",
            image: "/images/—Pngtree—n circle letter initial logo_4835121_processed.png"
        },
        {
            name: "Carrrerkick",
            tech: "Web Dev",
            year: "2024",
            image: "/images/IMG-20251021-WA0067.jpg"
        },
        {
            name: "Star Assistant",
            tech: "Python + Analytics + React + Node.js",
            year: "Appearing",
            image: "/images/IMG-20251021-WA0067.jpg"
        },
        {
            name: "Media storage Management",
            tech: "html + css + js + Python",
            year: "2025",
            image: "/images/IMG-20251021-WA0067.jpg"
        },
        {
            name: "Star Mobile Assistant",
            tech: "Python + Analytics + React + Node.js + Flutter",
            year: "Appearing",
            image: "/images/IMG-20251021-WA0067.jpg"
        },
    ]
};

// ============================================================================
// ABOUT SECTION - Professional background and experience
// ============================================================================
export const aboutData = {
    // Profile image
    profileImage: profileImg,

    // Professional summary
    summary: {
        text: [
            "I am a passionate Full Stack Developer and Diploma student in Computer Science at Uluberia Government Polytechnic (WBSCTE). My journey is defined by a relentless curiosity for technology.",
            "With a strong foundation in Python, React, Node.js, JavaScript, and Web Technologies, I specialize in building data-driven applications and immersive web experiences. I am constantly exploring Generative AI and Data Structures to push the boundaries of what's possible."
        ],
        coreCompetencies: [
            "Full Stack Development",
            "React",
            "Python ",
            "Node.js",
            "JavaScript",
            "Data Structures & Algorithms",
            "Web Technologies",
            "Flutter"
        ]
    },

    // Study Experience
    experiences: [
        {
            role:        "Uluberia Government Polytechnic",
            company:     "West Bengal State Council of Technical Education (WBSCTE)",
            result:      "GPA { 6.4 to 7.2 }",
            period:      "2022 - 2025",
            location:    "Uluberia, West Bengal, India",
            type:        "Diploma",
            description: "Diploma in Computer Science and Technology.",
            achievements: [
                "Completed Diploma in Computer Science and Technology.",
                "Completed intensive hands-on training and certification.",
            ],
            tech:        ["Python", "JavaScript", "HTML", "CSS", "Web Development", "Application Development"],
            gradient:    "from-[#131c80] to-[#3066be]"
        },
        {
            role:        "Kulumbani Jamunadas Khamka High School",
            company:     "West Bengal Board of Secondary Education (WBSE)",
            result:      "Maks-42%",
            period:      "2021 - 2022 (Secondary)",
            location:    "Bishnupur, West Bengal, India",
            type:        "Secondary",
            description: "Secondary School Certificate.",
            achievements: [
                "Completed Secondary School Certificate.",
                "Completed intensive hands-on training and certification.",
            ],
            tech: ["English", "Bengali", "Math", "Science", "Social"],
            gradient: "from-[#131c80] to-[#3066be]"
        },

    ],

    // Internships
    internships: [
        {
            role:        "Web Development Intern",
            company:     "Aeonix Research & Innovations LLP",
            period:      "Oct 2024 - Oct 2024",
            location:    "West Bengal, India",
            type:        "Internship",
            description: "Completed a 1-month industrial internship focusing on basic web development.",
            achievements: [
                "Developed responsive web pages using HTML, CSS, and JavaScript.",
                "Collaborated on live projects and learned industry best practices.",
                "Awarded Certificate of Achievement (SL No: AEONIX/2024/ARI00758)."
            ],
            tech: ["HTML", "CSS", "JavaScript"],
            gradient: "from-[#3066be] to-[#5AA8D6]"
        },
        {
            role:      "Data Visualization Intern",
            company:   "Tata (Forage Job Simulation)",
            period:    "Aug 2024",
            location:  "Remote",
            type:      "Simulation",
            description: "Empowering business with effective insights through data visualization.",
            achievements: [
                "Created impactful data visualizations for Tata Consultancy Services.",
                "Prepared strategic questions for client senior leadership meetings.",
                "Analyzed complex datasets to support executive decision-making."
            ],
            tech: ["Data Visualization", "Analytics", "Business Intelligence"],
            gradient: "from-[#5AA8D6] to-[#00bfff]"
        },
        {
            role:          "Python Developer Trainee",
            company:       "Ardent Computech Pvt Ltd",
            period:        "Oct 2023 - Nov 2023",
            location:      "West Bengal, India",
            type:          "Industrial Training",
            description:   "Industrial Intensive Activate program focused on Python Programming.",
            achievements: [
                "Mastered Python programming fundamentals and application development.",
                "Completed intensive hands-on training and certification.",
                "Certification ID: ARDENT/2023/AD85608."
            ],
            tech:     ["Python", "Application Development"],
            gradient: "from-[#131c80] to-[#3066be]"
        },
        {
            role:           "Full Stack Web Development",
            company:        "YCSAS PVT. LTD.",
            period:         "30th Sep 2024 - 10th Nov 2024",
            location:       "West Bengal, India",
            type:           "Industrial Training",
            description:    "Outstanding completion of the online autumn internship program.",
            achievements: [
                "Completed online autumn internship program in Full Stack Web Development.",
                "Recognized for being hardworking, sincere, and diligent.",
                "Certificate No: YCSAS/INTR/2024/0038"
            ],
            tech:         ["Full Stack", "Web Development", "Python"],
            gradient:     "from-[#131c80] to-[#3066be]"
        },
    ], // Keeping empty as we moved them to experiences for better visibility

    // Education & Achievements
    scienceFairs: [
        {
            name:           " Science & Engineering Fair 2025",
            category:       "BIRLA INDUSTRIAL & TECHNOLOGICAL MUSEUM",
            achievement:    "Participate",
            date:           "7th - 10th Jan 2025",
            description:    " Participated in the prestigious Science & Engineering Fair 2025 organized by Birla Industrial & Technological Museum (a unit of National Council of Science Museums, Ministry of Culture, Govt. of India). Demonstrated scientific creativity and innovation by presenting a project in the Uluberia Govt. Polytechnic, Howrah, West Bengal category during this interstate science exhibition held from January 7-10, 2025. The fair showcased cutting-edge science models from Eastern India under the theme \"Science and Technology for Sustainable Future\"",
            certificate:    "",
            gradient:       "from-[#FFD700] to-[#FFA500],from-[#C0C0C0] to-[#A8A8A8]",
            icon:           "🔭"
        },
        {
            name:           "Inter College Science Fair & Practical Project Exibition 2025",
            category:       "THE CALCUTTA TECHNICAL SCHOOL",
            achievement:    "Participate in Group ",
            date:           "9th May 2024",
            description:    "Participated in the prestigious Inter College Science Fair & Practical Project Exibition 2025 organized by The Calcutta Technical School (a unit of National Council of Science Museums, Ministry of Culture, Govt. of India). Demonstrated scientific creativity and innovation by presenting a project in the Uluberia Govt. Polytechnic, Howrah, West Bengal category during this interstate science exhibition held from May 9, 2024.",
            certificate:    "",
            gradient:       "from-[#C0C0C0] to-[#A8A8A8],from-[#FFD700] to-[#FFA500]",
            icon:           "🏅5️⃣"
        },
        {
            name:           "Workshop on Basic Digital Electronics",
            category:       "ULUBERIA GOVT. POLYTECHNIC",
            achievement:    "Participate in Group ",
            date:           "9th and 10th Aug 2023",
            description:    "Participated in the prestigious Workshop on Basic Digital Electronics organized by Uluberia Govt. Polytechnic, Howrah, West Bengal. Demonstrated scientific creativity and innovation by presenting a project in the Uluberia Govt. Polytechnic, Howrah, West Bengal category during this interstate science exhibition held from Aug 9-10, 2023.",
            certificate:    "",
            gradient:       "from-[#C0C0C0] to-[#A8A8A8],from-[#FFD700] to-[#FFA500]",
            icon:           "💡"
        }
    ],

    // Professional certifications
    certifications: [
        { name: "Basic Web Development", issuer: "Aeonix Research & Innovations LLP", year: "2024" },
        { name: "Data Visualisation",    issuer: "Tata (Forage)", year: "2024" },
        { name: "Data Analytics",        issuer: "Accenture", year: "2024" },
        { name: "Python Programming",    issuer: "Ardent Computech Pvt Ltd", year: "2023" },
        { name: "Generative AI",         issuer: "Microsoft & LinkedIn", year: "2024" },
        { name: "Full Stack Web Development", issuer: "YCSAS PVT. LTD.", year: "2024" },
    ]
};

// ============================================================================
// DREAM PROJECT SECTION - Special showcase for the ultimate project
// ============================================================================
export const dreamProjectData = {
    title:       "Star AI Lab",
    description: "A revolutionary platform that integrates IoT, AI, and blockchain to create intelligent, sustainable, and connected urban environments. This project represents the convergence of cutting-edge technologies to solve real-world challenges.",
    vision:      "To transform urban living by creating self-optimizing cities that enhance quality of life, reduce environmental impact, and foster innovation through data-driven decision making.",
    category:    "Website Based Project",
    status:      "In Development",
    image:       dreamProjectImg,

    // Quick stats displayed prominently
    quickStats: [
        { value: "Trail Mode ", label: "Users" },
        { value: "1+",          label: "Modules" },
        { value: "99.9%",       label: "Uptime" }
    ],

    // Key features
    keyFeatures: [
        "Real-time Traffic Optimization",
        "Smart Energy Management",
        "Predictive Maintenance",
        "Citizen Engagement Portal",
        "Environmental Monitoring",
        "Emergency Response System"
    ],

    // Technology stack
    techStack: [
        "React",
        "Node.js",
        "Python",
        "TensorFlow",
        "Blockchain",
        "IoT",
        "AWS",
        "Kubernetes",
        "GraphQL",
        "PostgreSQL"
    ],

    // Expected impact
    impact: [
        "Reduce city energy consumption by 30% through AI-driven optimization",
        "Decrease traffic congestion by 40% with predictive routing algorithms",
        "Improve emergency response times by 50% using real-time data analytics",
        "Enable data-driven policy making for sustainable urban development"
    ],

    // Timeline
    timeline: {
        start: "Jan 2024",
        end:   "Dec 2025"
    },

    // Team information
    teamSize: "Me only",

    // Progress percentage
    progress: 20,

    // Links
    liveUrl:       "https://smartcity-demo.example.com",
    githubUrl:     "https://github.com/username/smart-city-platform"
};

// ============================================================================
// PROJECTS SECTION - Portfolio showcase
// ============================================================================
// data/portfolio.ts
export interface ProjectStats {
    year:         string;
    status:       'Live' | 'In Progress' | 'Completed';
    stars?:       string;
    commits?:     string;
    views?:       string;
    forks?:       string;
}

export interface Project {
    title:        string;
    description:  string;
    image:        string;
    tags:         string[];
    category:     string;
    accent:       string;
    liveUrl:      string;
    githubUrl:    string;
    achievements: string[];
    stats:        ProjectStats;
}

export const projectsData: Project[] = [
    {
        title:       "Star Ai lab",
        description: "An innovative website project focusing on AI integration and modern web technologies.",
        image:       dreamProjectImg,
        tags:        ["React", "AI", "Web Development"],
        category:    "Full-Stack",
        accent:      "#5AA8D6",
        liveUrl:     "https://star-ai-lab.example.com",
        githubUrl:   "https://github.com/Nilanjan-Nayak",
        achievements: [
            "Implemented modern UI/UX principles",
            "Integrated AI-driven features"
        ],
        stats: {
            year: "2024",
            status: "In Progress",
        }
    },
    {
        title:       "Carrrerkick",
        description: "A comprehensive internship website designed to connect students with opportunities.",
        image:       "/projects/ecommerce-platform.jpg",
        tags:        ["HTML", "CSS", "JavaScript", "Web Design"],
        category:    "Web Dev",
        accent:      "#3066be",
        liveUrl:     "https://carrrerkick.example.com",
        githubUrl:   "https://github.com/Nilanjan-Nayak",
        achievements: [
            "Designed user-friendly interface",
            "Optimized for performance"
        ],
        stats: {
            year:    "2024",
            status:  "Live",
            stars:   "12",
            commits: "45",
            views:   "1.2k"
        }
    },
    {
        title:       "Tata Data Visualization",
        description: "Data visualization project for Tata Consultancy Services job simulation, providing business insights.",
        image:       "/projects/project-management.jpg",
        tags:        ["Data Visualization", "Analytics", "Business Intelligence"],
        category:    "Data Science",
        accent:      "#00bfff",
        liveUrl:     "#",
        githubUrl:   "https://github.com/Nilanjan-Nayak",
        achievements: [
            "Created effective visual insights",
            "Analyzed key business metrics"
        ],
        stats: {
            year: "2024",
            status: "Completed",
            stars: "5",
            commits: "10",
            views: "100"
        }
    },
];

// ============================================================================
// SKILLS SECTION - Technical competencies
// ============================================================================
export const skillsData = {
    // Skill categories with detailed breakdown
    categories: [
        {
            id:           1,
            title:        "Languages",
            icon:         Code,
            size:         "lg:col-span-2 lg:row-span-2",
            gradient:     "from-[#3066be] to-[#5AA8D6]",
            iconSize:     48,
            skills: [
                { name: "Python",     level: 85, years: 3, projects: 4, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "C",          level: 80, years: 2, projects: 2, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
                { name: "JavaScript", level: 75, years: 2, projects: 15, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "HTML",       level: 90, years: 3, projects: 20, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS",        level: 90, years: 3, projects: 20, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "TypeScript", level: 75, years: 2, projects: 5, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Java",       level: 75, years: 2, projects: 3, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
                
            ]
        },
        {
            id: 2,
            title: "Technologies",
            icon: Server,
            size: "lg:col-span-1 lg:row-span-1",
            gradient: "from-[#5AA8D6] to-[#00bfff]",
            iconSize: 32,
            skills: [
                { name: "React",      level: 70, years: 1, projects: 5, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Node.js",    level: 60, years: 1, projects: 3, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "vite",       level: 95, years: 3, projects: 5, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
            ]
        },
        {
            id:           3,
            title:        "Data & AI",
            icon:         Brain,
            size:         "lg:col-span-1 lg:row-span-1",
            gradient:     "from-[#00bfff] to-[#3066be]",
            iconSize:     32,
            skills: [
                { name: "Generative AI", level: 75, years: 1, projects: 5, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
                { name: "Data Viz",      level: 80, years: 2, projects: 8, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
                { name: "Algorithms",    level: 70, years: 2, projects: 10, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
            ]
        },
        {
            id:           4,
            title:        "Tools",
            icon:         Cpu,
            size:         "lg:col-span-2 lg:row-span-1",
            gradient:     "from-[#131c80] to-[#3066be]",
            iconSize:     40,
            skills: [
                { name: "MS Copilot",   level: 85, years: 1, projects: 5, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
                { name: "Git/GitHub",   level: 80, years: 2, projects: 15, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "VS Code",      level: 95, years: 3, projects: 6, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            ]
        }
    ],

    // Radar chart data for skill visualization
    radar: [
        { name: "Coding",       level: 90 },
        { name: "Algorithms",   level: 75 },
        { name: "Web Dev",      level: 85 },
        { name: "Data Viz",     level: 80 },
        { name: "Gen AI",       level: 70 },
        { name: "Design",       level: 65 }
    ]
};

// ============================================================================
// CONTACT SECTION - Communication methods
// ============================================================================
export const contactData = {
    methods: [
        {
            icon:         Mail,
            label:        "Email Me",
            value:        "nayaknilanjan2@gmail.com",
            description:  "I usually reply within 24 hours",
            link:         "mailto:nayaknilanjan2@gmail.com",
            gradient:     "from-[#3066be] to-[#5AA8D6]"
        },
        {
            icon:         Globe,
            label:        "Socials",
            value:        "@Nilanjan-Nayak",
            description:  "Follow my daily updates",
            link:         "https://github.com/Nilanjan-Nayak",
            gradient:     "from-[#5AA8D6] to-[#00bfff]"
        }
    ]
};

// ============================================================================
// NAVIGATION - Site navigation menu items
// ============================================================================
export const navItems = [
    { id: 'hero',        label: 'Home',             sectionId: 'hero' },
    { id: 'about',       label: 'About',            sectionId: 'about' },
    { id: 'dream-project', label: 'Dream Project',  sectionId: 'dream-project' },
    { id: 'projects',    label: 'Projects',         sectionId: 'projects' },
    { id: 'skills',      label: 'Skills',           sectionId: 'skills' },
    { id: 'contact',     label: 'Contact',          sectionId: 'contact' }
];
