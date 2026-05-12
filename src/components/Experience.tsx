"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioContext } from "../context/PortfolioContext";

const cardItems = [
    { id: 1, logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", name: "MongoDB" },
    { id: 2, logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg", name: "Express" },
    { id: 3, logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg", name: "React" },
    { id: 4, logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", name: "NodeJS" },
    { id: 5, logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg", name: "NextJS" },
    { id: 6, logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", name: "Tailwind" },
    { id: 7, logo: "https://cdn.worldvectorlogo.com/logos/typescript-2.svg", name: "TypeScript" },
    { id: 8, logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg", name: "Framer" },
];

function Experience() {
    const context = useContext(portfolioContext);
    if (!context) return null;

    return (
        <section id="Experience" className="max-w-screen-2xl container mx-auto px-6 sm:px-12 md:px-20 py-48">
            <div className="flex flex-col lg:flex-row gap-40">
                <div className="lg:w-1/3 space-y-16">
                    <div className="space-y-8">
                        <p className="label-caps !text-[#C1C1FF]">Technical Skills</p>
                        <h2 className="text-4xl sm:text-6xl md:text-8xl font-[900] tracking-[-0.06em] leading-[0.85] text-white">
                            My <br /> <span className="text-[#5454D4]">Expertise.</span>
                        </h2>
                    </div>
                    
                    <p className="text-2xl text-[var(--text-soft)] leading-relaxed font-medium">
                        Leveraging the most advanced technologies to engineer digital products that define the future.
                    </p>


                </div>
                
                <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-8">
                    {cardItems.map(({ id, logo, name }, index) => (
                        <motion.div 
                            key={id} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -15, scale: 1.05 }}
                            className="glass-dark aspect-square p-12 rounded-xl flex flex-col items-center justify-center space-y-10 group hover:border-[#5454D4]/50 transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#5454D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            
                            <div className="w-20 h-20 flex items-center justify-center relative z-10">
                                <div className="absolute inset-0 bg-[#5454D4]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-150"></div>
                                <Image 
                                    className="relative z-10 w-full h-full object-contain grayscale brightness-150 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
                                    src={logo} 
                                    alt={name}
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <h3 className="label-caps !text-[10px] !text-[#918F9F] group-hover:!text-white transition-colors relative z-10 tracking-[0.2em]">{name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
            {/* Professional Experience Section */}
            <div className="mt-60 space-y-32">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="space-y-8">
                        <p className="label-caps !text-[#C1C1FF]">Work History</p>
                        <h2 className="text-4xl sm:text-6xl md:text-8xl font-[900] text-white tracking-[-0.05em] leading-none">Professional <span className="text-[#5454D4]">Journey.</span></h2>
                    </div>
                </div>

                <div className="space-y-12">
                    {context.AboutData.professional_experience.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-[#1A1C1C] p-12 md:p-20 rounded-2xl border border-white/5 group hover:border-[#5454D4]/30 transition-all duration-1000"
                        >
                            <div className="flex flex-col lg:flex-row justify-between gap-16">
                                <div className="lg:w-2/3 space-y-12">
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap items-center gap-6">
                                            <h3 className="text-xl sm:text-3xl md:text-5xl font-[900] text-white tracking-tight">{exp.title}</h3>
                                            <span className="px-4 py-1 rounded bg-[#5454D4] text-white text-[10px] font-black uppercase tracking-widest">{exp.duration}</span>
                                        </div>
                                        <p className="text-xl font-bold text-[#5454D4] uppercase tracking-widest">{exp.company}</p>
                                    </div>
                                    <p className="text-xl text-[var(--text-soft)] leading-relaxed">{exp.description}</p>
                                    <ul className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                                        {exp.points?.map((point, i) => (
                                            <li key={i} className="flex gap-4 text-[var(--text-soft)] text-sm leading-relaxed">
                                                <span className="text-[#5454D4] font-black">/</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="lg:w-1/3 space-y-12">
                                    <div className="space-y-6">
                                        <p className="label-caps !text-[11px] tracking-[0.3em]">Tech Stack</p>
                                        <div className="flex flex-wrap gap-3">
                                            {exp.techUsed.map((tech, i) => (
                                                <span key={i} className="px-5 py-2 rounded-lg bg-white/5 border border-white/5 text-[10px] font-black text-white uppercase tracking-widest group-hover:border-[#5454D4]/30 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;