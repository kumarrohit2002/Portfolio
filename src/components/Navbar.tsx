"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-700 ${scrolled ? "py-4" : "py-8"}`}>
            <div className="max-w-screen-2xl container mx-auto px-6 sm:px-12 md:px-20">
                <div className={`glass-dark rounded-2xl h-20 md:h-24 flex justify-between items-center px-6 md:px-12 border border-white/5 transition-all duration-700 ${scrolled ? "bg-[#121414]/90 backdrop-blur-[40px] shadow-2xl" : "bg-transparent border-transparent"}`}>
                    <div className="flex items-center gap-6 cursor-pointer group">
                        <div className="w-14 h-14 bg-[#5454D4] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-700 shadow-[0_0_30px_rgba(84,84,212,0.4)]">
                            <span className="text-white font-[900] text-3xl tracking-tighter">R</span>
                        </div>
                        <h1 className="text-2xl font-[900] tracking-[-0.06em] text-white">ROHIT <span className="text-[#5454D4]">K.</span></h1>
                    </div>

                    {/* Desktop Navbar */}
                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-12">
                            {navItems.map(({ id, text }) => (
                                <li key={id}>
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-100}
                                        activeClass="!text-[#5454D4]"
                                        className="text-[10px] font-black text-[var(--text-soft)] hover:text-white transition-all duration-500 cursor-pointer uppercase tracking-[0.3em] relative group"
                                    >
                                        {text}
                                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#5454D4] group-hover:w-full transition-all duration-500"></span>
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button className="ml-8 px-12 py-4 rounded-lg bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#5454D4] hover:text-white transition-all duration-700 shadow-xl">
                                    HIRE ME
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer p-2 text-white hover:text-[#5454D4] transition-colors">
                        {menu ? <IoCloseSharp size={40} /> : <MdOutlineMenu size={40} />}
                    </div>
                </div>

                {/* Mobile Navbar */}
                <AnimatePresence>
                    {menu && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="md:hidden glass-dark mt-4 rounded-2xl overflow-hidden border border-white/5"
                        >
                            <ul className="p-8 space-y-6">
                                {navItems.map(({ id, text }) => (
                                    <li key={id}>
                                        <Link
                                            onClick={() => setMenu(false)}
                                            to={text}
                                            smooth={true}
                                            duration={500}
                                            offset={-100}
                                            activeClass="text-[#5454D4]"
                                            className="text-lg font-black text-white hover:text-[#5454D4] transition-colors block uppercase tracking-widest"
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

export default Navbar;
