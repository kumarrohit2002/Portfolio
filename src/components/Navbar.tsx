"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    const navItems = [
        { id: 1, text: "Home", path: "/" },
        { id: 2, text: "About", path: "/about" },
        { id: 3, text: "Portfolio", path: "/projects" },
        { id: 4, text: "Services", path: "/services" },
        { id: 5, text: "Experience", path: "/experience" },
        { id: 6, text: "Contact", path: "/contact" },
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
                    <Link href="/" className="flex items-center gap-6 cursor-pointer group">
                        <div className="w-14 h-14 bg-[#5454D4] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-700 shadow-[0_0_30px_rgba(84,84,212,0.4)]">
                            <span className="text-white font-[900] text-3xl tracking-tighter">R</span>
                        </div>
                        <h1 className="text-2xl font-[900] tracking-[-0.06em] text-white uppercase">ROHIT <span className="text-[#5454D4]">K.</span></h1>
                    </Link>

                    {/* Desktop Navbar */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center space-x-8">
                            {navItems.map(({ id, text, path }) => (
                                <li key={id}>
                                    {isHome ? (
                                        <ScrollLink
                                            to={text === "Portfolio" ? "Portfolio" : text}
                                            smooth={true}
                                            duration={500}
                                            offset={-100}
                                            activeClass="!text-[#5454D4]"
                                            className="text-[10px] font-black text-[var(--text-soft)] hover:text-white transition-all duration-500 cursor-pointer uppercase tracking-[0.3em] relative group"
                                        >
                                            {text}
                                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#5454D4] group-hover:w-full transition-all duration-500"></span>
                                        </ScrollLink>
                                    ) : (
                                        <Link
                                            href={path}
                                            className={`text-[10px] font-black transition-all duration-500 uppercase tracking-[0.3em] relative group ${pathname === path ? "text-[#5454D4]" : "text-[var(--text-soft)] hover:text-white"}`}
                                        >
                                            {text}
                                            <span className={`absolute -bottom-2 left-0 h-0.5 bg-[#5454D4] transition-all duration-500 ${pathname === path ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                            <li>
                                <Link href="/contact" className="ml-4 px-10 py-4 rounded-lg bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#5454D4] hover:text-white transition-all duration-700 shadow-xl">
                                    HIRE ME
                                </Link>
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
                                {navItems.map(({ id, text, path }) => (
                                    <li key={id}>
                                        {isHome ? (
                                            <ScrollLink
                                                onClick={() => setMenu(false)}
                                                to={text === "Portfolio" ? "Portfolio" : text}
                                                smooth={true}
                                                duration={500}
                                                offset={-100}
                                                activeClass="text-[#5454D4]"
                                                className="text-lg font-black text-white hover:text-[#5454D4] transition-colors block uppercase tracking-widest"
                                            >
                                                {text}
                                            </ScrollLink>
                                        ) : (
                                            <Link
                                                onClick={() => setMenu(false)}
                                                href={path}
                                                className={`text-lg font-black block uppercase tracking-widest transition-colors ${pathname === path ? "text-[#5454D4]" : "text-white hover:text-[#5454D4]"}`}
                                            >
                                                {text}
                                            </Link>
                                        )}
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
