"use client";
import React, { useContext } from 'react';
import Image from 'next/image';
import { portfolioContext } from '../context/PortfolioContext';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function ProjectCard({ logo, name, description, tech, link }: { logo: string; name: string; description?: string; tech?: string[]; link?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative cursor-pointer"
            onClick={() => link && window.open(link, "_blank")}
        >
            <div 
                style={{ transform: "translateZ(50px)" }}
                className="relative aspect-video overflow-hidden rounded-xl bg-[#1A1C1C] border border-white/5 transition-all duration-700 group-hover:border-[#5454D4]/30"
            >
                <Image 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                    src={logo} 
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-transparent to-transparent opacity-95"></div>
                
                <div 
                    style={{ transform: "translateZ(30px)" }}
                    className="absolute inset-12 flex flex-col justify-end gap-6"
                >
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {tech?.map((t, i) => (
                                <span key={i} className="text-[9px] font-black uppercase tracking-widest text-[#5454D4] bg-[#5454D4]/10 px-2 py-0.5 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-xl sm:text-3xl md:text-5xl font-[900] text-white tracking-[-0.04em] leading-none">{name}</h3>
                        <p className="text-sm text-[var(--text-soft)] line-clamp-2 max-w-md group-hover:text-white transition-colors">
                            {description}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="label-caps !text-[10px] !text-[#BABABA] tracking-[0.3em]">Launch Project</p>
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                            <span className="text-xl font-bold">↗</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Hover Glow */}
            <div className="absolute -inset-2 bg-[#5454D4]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl -z-10" />
        </motion.div>
    );
}

function Portfolio() {
    const context = useContext(portfolioContext);
    if (!context) return null;
    const { ProjectItems } = context;

    return (
        <section id="Portfolio" className="max-w-screen-2xl container mx-auto px-6 sm:px-12 md:px-20 py-48">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-16">
                <div className="space-y-8">
                    <p className="label-caps !text-[#C1C1FF]">Featured Work</p>
                    <h2 className="text-4xl sm:text-6xl md:text-[100px] font-[900] tracking-[-0.06em] leading-[0.9] text-white">
                        My <span className="text-[#5454D4]">Projects.</span>
                    </h2>
                </div>
                <button className="text-xs font-black uppercase tracking-[0.4em] text-[var(--text-muted)] hover:text-white transition-all duration-500 group flex items-center gap-4">
                    View All Projects <span className="inline-block group-hover:translate-x-4 transition-transform duration-500">→</span>
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {ProjectItems.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;