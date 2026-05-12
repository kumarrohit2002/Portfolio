"use client";
import React, { useContext } from 'react';
import { portfolioContext } from '../context/PortfolioContext';
import { motion } from "framer-motion";

function About() {
    const context = useContext(portfolioContext);
    if (!context) return null;
    const { AboutmeData, AboutData } = context;

    if (!AboutData) return <p>Loading...</p>;

    return (
        <section id="About" className="max-w-screen-2xl container mx-auto px-6 sm:px-12 md:px-20 py-48">
            <div className="grid lg:grid-cols-2 gap-40 items-start">
                <div className="space-y-24">
                    <div className="space-y-12">
                        <p className="label-caps !text-[#C1C1FF]">My Background</p>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-[900] tracking-[-0.06em] leading-[0.85] text-white">
                            Professional <br /> <span className="text-[#5454D4]">Profile.</span>
                        </h2>
                        <p className="text-lg sm:text-xl md:text-3xl text-[var(--text-soft)] leading-relaxed font-medium">
                            {AboutmeData}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-[#1A1C1C] p-12 rounded-xl border border-white/5 space-y-8 group hover:border-[#5454D4]/30 transition-all duration-700"
                        >
                            <div className="w-16 h-16 bg-[#5454D4]/10 rounded-lg flex items-center justify-center text-[#5454D4] group-hover:bg-[#5454D4] group-hover:text-white transition-colors duration-500">
                                <span className="text-3xl font-black italic">@</span>
                            </div>
                            <div>
                                <p className="label-caps !text-[10px] mb-3 tracking-[0.3em]">Get In Touch</p>
                                <p className="text-white font-black text-lg md:text-xl tracking-tight">{AboutData.contact?.email}</p>
                            </div>
                        </motion.div>
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="bg-[#1A1C1C] p-12 rounded-xl border border-white/5 space-y-8 group hover:border-green-500/30 transition-all duration-700"
                        >
                            <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors duration-500">
                                <span className="text-3xl font-black italic">#</span>
                            </div>
                            <div>
                                <p className="label-caps !text-[10px] mb-3 tracking-[0.3em]">Phone Number</p>
                                <p className="text-white font-black text-lg md:text-xl tracking-tight">{AboutData.contact?.phone}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="space-y-20 bg-[#1A1C1C] p-20 rounded-2xl border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-full h-full bg-[#5454D4]/5 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    <h3 className="text-3xl sm:text-4xl font-[900] text-white tracking-[-0.04em] uppercase">Education</h3>
                    <div className="space-y-16">
                        {AboutData.education?.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="relative pl-16 border-l border-white/10"
                            >
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#5454D4] shadow-[0_0_15px_#5454D4]"></div>
                                <h4 className="font-[900] text-xl sm:text-2xl md:text-3xl text-white mb-2 leading-none tracking-tight">{item.title}</h4>
                                <div className="flex flex-col gap-4 text-sm font-black text-[#BABABA] uppercase tracking-[0.2em]">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[#5454D4]">{item.institution}</span>
                                        <span className="opacity-20">/</span>
                                        <span className="text-[11px] opacity-60">{item.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-[10px] text-[#BABABA]">
                                        {item.score && <span className="bg-[#5454D4]/10 text-[#5454D4] px-3 py-1 rounded">{item.score}</span>}
                                        {item.location && <span className="opacity-40">{item.location}</span>}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certificates Premium Grid */}
            <div className="mt-60 space-y-32">
                <div className="text-center space-y-8">
                    <p className="label-caps !text-[#C1C1FF]">Certifications</p>
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-[900] text-white tracking-[-0.05em] leading-none">My <span className="text-[#5454D4]">Achievements.</span></h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {AboutData.certificates?.map((cert, index) => (
                        <motion.div 
                            key={index} 
                            whileHover={{ scale: 1.02 }}
                            className="bg-[#1A1C1C] rounded-xl overflow-hidden border border-white/5 group hover:border-[#5454D4]/30 transition-all duration-1000"
                        >
                            <div className="aspect-[16/10] overflow-hidden grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 relative">
                                <img src={cert.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={cert.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121414] to-transparent opacity-80"></div>
                            </div>
                            <div className="p-12 space-y-6">
                                <h3 className="font-black text-2xl text-white tracking-tight leading-tight group-hover:text-[#5454D4] transition-colors duration-500">{cert.title}</h3>
                                <p className="label-caps !text-[11px] !text-[#918F9F] tracking-[0.25em]">{cert.institution}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-60 pt-32 border-t border-white/5 text-center space-y-12">
                <p className="label-caps !text-[#C1C1FF] tracking-[0.5em]">My Goal</p>
                <motion.p 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-xl sm:text-3xl md:text-7xl font-[900] text-white italic max-w-6xl mx-auto leading-[1] tracking-[-0.06em] selection:bg-white selection:text-black"
                >
                    &quot;{AboutData.mission_statement}&quot;
                </motion.p>
            </div>
        </section>
    );
}

export default About;
