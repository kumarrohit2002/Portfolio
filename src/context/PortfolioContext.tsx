"use client";
import React, { createContext, type ReactNode } from 'react';
import { 
    SiCplusplus, SiJavascript, SiTypescript, SiNextdotjs, SiExpress, 
    SiMongodb, SiPostgresql, SiMysql, SiPrisma, SiTailwindcss, SiReactquery 
} from "react-icons/si";
import { FaJava, FaNodeJs, FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";

interface Contact {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
}

interface Education {
    title: string;
    institution: string;
    duration: string;
    score?: string;
    location?: string;
}

interface Skill {
    name: string;
    Icon?: any;
    color?: string;
}

interface SkillCategory {
    category: string;
    skills: Skill[];
}

interface Experience {
    title: string;
    company: string;
    duration: string;
    techUsed: string[];
    description: string;
    points?: string[];
    imgUrl: string;
    deployedLink?: string;
}

interface Certificate {
    title: string;
    institution: string;
    duration: string;
    img: string;
}

interface AboutData {
    contact: Contact;
    education: Education[];
    skill_experience: SkillCategory[];
    professional_experience: Experience[];
    certificates: Certificate[];
    achievements: string;
    mission_statement: string;
}

interface ProjectItem {
    id: number;
    logo: string;
    name: string;
    description?: string;
    tech?: string[];
    link?: string;
    duration?: string;
}

interface PortfolioContextType {
    ProjectItems: ProjectItem[];
    ExperienceItems: ProjectItem[];
    AboutmeData: string;
    AboutData: AboutData;
}

export const portfolioContext = createContext<PortfolioContextType | null>(null);

export default function PortfolioContextProvider({ children }: { children: ReactNode }) {
    const ProjectItems: ProjectItem[] = [
        { 
            id: 1, 
            logo: "/img/theDresser.png", 
            name: "Tastico", 
            description: "On-Demand Culinary & Home Services Platform. Built role-based dashboards and real-time booking with Razorpay.",
            tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Razorpay"],
            link: "https://tastico.co.in",
            duration: "Dec 2025 – Apr 2026"
        },
        { 
            id: 2, 
            logo: "/img/prime1.png", 
            name: "PGHunter.in", 
            description: "Complete PG Accommodation Platform. Student discovery platform leading to ₹10,000+ in revenue.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
            link: "https://pghunter.in",
            duration: "Jul 2025 – Aug 2025"
        },
        { 
            id: 3, 
            logo: "/img/ur_sharthi1.png", 
            name: "UR-SARTHI", 
            description: "Mentorship platform with real-time video calls (ZegoCloud) and secure payment integration.",
            tech: ["React.js", "Node.js", "ZegoCloud", "Razorpay", "MongoDB"],
            link: "https://ur-sarthi-user.vercel.app",
            duration: "Jun 2024 – Aug 2024"
        }
    ];

    const ExperienceItems: ProjectItem[] = [
        { id: 1, logo: "/img/javascript.png", name: "JavaScript" },
        { id: 2, logo: "/img/reactjs.png", name: "ReactJs" },
        { id: 3, logo: "/img/node.png", name: "NodeJs" },
        { id: 4, logo: "/img/mongodb.jpg", name: "MongoDB" },
        { id: 5, logo: "/img/nextjs.png", name: "Next.js" },
        { id: 6, logo: "/img/tailwind.png", name: "Tailwind" },
        { id: 7, logo: "/img/typescript.png", name: "TypeScript" },
        { id: 8, logo: "/img/java.png", name: "Java" }
    ];

    const AboutmeData =
        `Professional Full Stack Developer and Intern at VisionTech Group, specialized in building high-performance web applications using Next.js and the MERN stack. 

        I focus on architectural integrity, SEO optimization, and delivering premium user experiences. From connecting culinary professionals on Tastico to revolutionizing student housing with PGHunter.in, I bridge complex business needs with elegant technical solutions.`;
    
    const AboutData: AboutData = {
        contact: {
            email: "rohitranjanrrsingh@gmail.com",
            phone: "+91-7903769260",
            location: "Punjab, India",
            linkedin: "https://www.linkedin.com/in/rohit-full-stack-dev",
            github: "https://github.com/kumarrohit2002"
        },
        education: [
            { 
                title: "Bachelor of Technology - Computer Science and Engineering", 
                institution: "Lovely Professional University", 
                duration: "Aug 2022 – Present", 
                score: "CGPA: 7.53",
                location: "Punjab, India"
            },
            { 
                title: "Intermediate (12th)", 
                institution: "BHAGWANPUR COLLEGE", 
                duration: "April 2018 – March 2020", 
                score: "Percentage: 77%",
                location: "Siwan, Bihar"
            },
            { 
                title: "Matriculation (10th)", 
                institution: "UMS JUAFFAR", 
                duration: "April 2017 – March 2018", 
                score: "Percentage: 58%",
                location: "Siwan, Bihar"
            },
        ],
        skill_experience: [
            {
                category: "Programming Languages",
                skills: [
                    { name: "C++", Icon: SiCplusplus, color: "#00599C" },
                    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
                    { name: "Java", Icon: FaJava, color: "#007396" }
                ]
            },
            {
                category: "Frameworks & Libraries",
                skills: [
                    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
                    { name: "React.js", Icon: FaReact, color: "#61DAFB" },
                    { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
                    { name: "Express.js", Icon: SiExpress, color: "#000000" },
                    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
                    { name: "React Query", Icon: SiReactquery, color: "#FF4154" }
                ]
            },
            {
                category: "Tools & Databases",
                skills: [
                    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
                    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
                    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
                    { name: "Git", Icon: FaGitAlt, color: "#F05032" }
                ]
            }
        ],
        professional_experience: [
            {
                title: "Full Stack Developer Intern",
                company: "VisionTech Group",
                duration: "Feb 2026 – Present",
                techUsed: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "REST APIs"],
                description: "Building and optimizing scalable web applications using Next.js and MERN stack.",
                points: [
                    "Developed an Employee Management System (EMS) with role-based access and analytics.",
                    "Improved VisionTech official website UI, performance, and SEO responsiveness.",
                    "Enhanced user experience and fixed bugs on the DogoCares platform.",
                    "Optimized APIs and implemented modern UI for better real-world performance."
                ],
                imgUrl: "/img/ur_sharthi1.png"
            }
        ],
        certificates: [
            { title: "Cloud Computing", institution: "NPTEL", duration: "4 months", img: "/img/mernStackCertificate.png" },
            { title: "R Programming", institution: "Coursera", duration: "2.5 months", img: "/img/r_programming.png" },
            { title: "Supervised Machine Learning", institution: "Coursera", duration: "2 months", img: "/img/mlCertificate.png" },
        ],
        achievements: "Solved 200+ coding problems on LeetCode & GeeksforGeeks",
        mission_statement: "To leverage my skills in full-stack development to build scalable, secure, and user-centric solutions that create real-world impact."
    };

    const value = {
        ExperienceItems,
        ProjectItems,
        AboutmeData,
        AboutData
    };

    return (
        <portfolioContext.Provider value={value}>
            {children}
        </portfolioContext.Provider>
    );
}
