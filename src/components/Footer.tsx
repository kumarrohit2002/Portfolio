"use client";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-[#121414] border-t border-white/5 py-32 relative overflow-hidden">
            {/* Cinematic background light */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#5454D4]/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/2" />
            
            <div className="max-w-screen-2xl container mx-auto px-8 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-start gap-24">
                    <div className="space-y-10 max-w-lg">
                        <div className="flex items-center gap-6 cursor-pointer group">
                            <div className="w-16 h-16 bg-[#5454D4] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-700 shadow-xl shadow-purple-500/20">
                                <span className="text-white font-[900] text-3xl tracking-tighter">R</span>
                            </div>
                            <h1 className="text-4xl font-[900] tracking-[-0.06em] text-white">ROHIT <span className="text-[#5454D4]">K.</span></h1>
                        </div>
                        <p className="text-2xl text-[var(--text-soft)] font-medium leading-relaxed">
                            Developing elite digital experiences that bridge the gap between imagination and reality.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-32">
                        <div className="space-y-10">
                            <p className="label-caps !text-[#C1C1FF]">Navigation</p>
                            <ul className="space-y-6 text-xl font-black text-white uppercase tracking-tight">
                                <li className="hover:text-[#5454D4] cursor-pointer transition-colors">Archive</li>
                                <li className="hover:text-[#5454D4] cursor-pointer transition-colors">Chronicle</li>
                                <li className="hover:text-[#5454D4] cursor-pointer transition-colors">Expertise</li>
                                <li className="hover:text-[#5454D4] cursor-pointer transition-colors">Mission</li>
                            </ul>
                        </div>
                        <div className="space-y-10">
                            <p className="label-caps !text-[#C1C1FF]">Signal Channel</p>
                            <div className="flex gap-6">
                                <a href="https://github.com/kumarrohit2002" target="_blank" className="w-20 h-20 rounded-xl bg-[#1A1C1C] border border-white/5 flex items-center justify-center text-[#918F9F] hover:bg-[#5454D4] hover:text-white transition-all duration-700 shadow-xl shadow-[#5454D4]/0 hover:shadow-[#5454D4]/20 group">
                                    <FaGithub size={32} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.linkedin.com/in/rohit-full-stack-dev" target="_blank" className="w-20 h-20 rounded-xl bg-[#1A1C1C] border border-white/5 flex items-center justify-center text-[#918F9F] hover:bg-[#5454D4] hover:text-white transition-all duration-700 shadow-xl shadow-[#5454D4]/0 hover:shadow-[#5454D4]/20 group">
                                    <FaLinkedin size={32} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" target="_blank" className="w-20 h-20 rounded-xl bg-[#1A1C1C] border border-white/5 flex items-center justify-center text-[#918F9F] hover:bg-[#5454D4] hover:text-white transition-all duration-700 shadow-xl shadow-[#5454D4]/0 hover:shadow-[#5454D4]/20 group">
                                    <FaTwitter size={32} className="group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="label-caps !text-[11px] !text-[#918F9F] tracking-[0.3em]">
                        © 2026 Rohit K. — All Transmission Rights Reserved.
                    </p>
                    <p className="label-caps !text-[11px] !text-[#918F9F] tracking-[0.3em] flex items-center gap-4">
                        Status: <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Optimal Operation
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;