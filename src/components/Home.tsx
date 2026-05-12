"use client";
import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import pic from "../../public/img/rohitImg.png";
import { RiReactjsLine } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import { portfolioContext } from "../context/PortfolioContext";
import { motion } from "framer-motion";
import HeroScene from "./HeroScene";
import gsap from "gsap";

import useMagnetic from "../hooks/useMagnetic";

function Home() {
    const context = useContext(portfolioContext);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    useMagnetic(btnRef);

    useEffect(() => {
        if (titleRef.current && contentRef.current) {
            const tl = gsap.timeline();
            tl.fromTo(titleRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.5 }
            )
                .fromTo(contentRef.current.children,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
                    "-=0.6"
                );
        }
    }, []);

    if (!context) return null;
    const { AboutmeData } = context;

    return (
        <section id="Home" className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-[#121414]">
            {/* 3D Background Scene */}
            <HeroScene />

            {/* Ambient Lighting */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#5454D4]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-screen-2xl container mx-auto px-6 sm:px-12 md:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <div className="lg:w-2/3 space-y-12">
                        <div ref={contentRef} className="space-y-8">
                            <p className="label-caps !text-[#C1C1FF]">Full-Stack Developer & Designer</p>
                            <h1
                                ref={titleRef}
                                className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-[900] tracking-[-0.08em] leading-[0.8] text-white uppercase mix-blend-difference"
                            >
                                Building Modern <br />
                                <span className="text-transparent stroke-text">Web Apps.</span>
                            </h1>

                            <div className="text-lg sm:text-2xl md:text-4xl font-medium text-[var(--text-soft)] flex flex-wrap items-center gap-x-4 gap-y-2">
                                <span>Developing</span>
                                <ReactTyped
                                    className="text-white font-black underline decoration-[#5454D4] underline-offset-8"
                                    strings={[
                                        "Full-Stack Development",
                                        "Workflow Automation",
                                        "Real-Time Applications",
                                        "Payment Integrations",
                                        "Secure Backend Systems",
                                        "SaaS Product Development"
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={30}
                                    loop={true}
                                />
                            </div>

                            <p className="text-base sm:text-lg md:text-2xl text-[var(--text-soft)] leading-relaxed max-w-2xl font-medium">
                                {AboutmeData}
                            </p>

                            <div className="flex flex-wrap gap-8 pt-4">
                                <button ref={btnRef} className="px-8 py-4 md:px-12 md:py-5 rounded-lg bg-[#5454D4] text-white font-black uppercase tracking-widest text-[10px] hover:bg-[#4444c0] transition-all duration-500 shadow-2xl">
                                    START A PROJECT
                                </button>
                                <button className="px-8 py-4 md:px-12 md:py-5 rounded-lg border border-white/10 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm">
                                    VIEW ARCHIVE
                                </button>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:w-1/3 relative"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#5454D4]/30 rounded-[1.5rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 aspect-[4/5] bg-[#1A1C1C]">
                                <Image
                                    src={pic}
                                    alt="Rohit Kumar"
                                    fill
                                    priority
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                                />
                            </div>

                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 glass-dark p-8 rounded-2xl border border-white/10 shadow-2xl"
                            >
                                <RiReactjsLine size={48} className="text-[#C1C1FF] animate-spin-slow" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Home;