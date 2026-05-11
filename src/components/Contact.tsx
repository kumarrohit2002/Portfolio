"use client";
import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data: any) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.query,
        };
        try {
            await axios.post("https://getform.io/f/brolvyoa", userInfo);
            toast.success("Transmission Received Successfully");
            reset();
        } catch (error) {
            toast.error("Transmission Interrupted");
        }
      }

    return (
        <section id="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 md:py-60">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#5454D4] rounded-2xl p-10 md:p-40 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24 relative overflow-hidden group shadow-[0_0_150px_rgba(84,84,212,0.2)]"
            >
                {/* Cinematic dynamic light */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[150px]"
                ></motion.div>

                <div className="md:w-3/4 space-y-6 md:space-y-12 relative z-10">
                    <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-[900] text-white tracking-[-0.06em] leading-[0.8] uppercase">
                        Let's Build <br /> 
                        <span className="text-transparent stroke-text">Something.</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-3xl font-medium max-w-2xl leading-relaxed">
                        Ready to start your next big project? Let's connect and make it happen.
                    </p>
                </div>

                <div className="md:w-1/4 flex justify-center md:justify-end relative z-10">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-[#5454D4] font-black text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] py-6 px-12 md:py-10 md:px-20 rounded-xl shadow-2xl hover:bg-[#C1C1FF] hover:text-[#5454D4] transition-all duration-700"
                    >
                        Get Started
                    </motion.button>
                </div>
            </motion.div>

            <div className="mt-60 grid lg:grid-cols-2 gap-40">
                <div className="space-y-12 md:space-y-20">
                    <div className="space-y-6 md:space-y-8">
                        <p className="label-caps !text-[#C1C1FF]">Contact Info</p>
                        <h3 className="text-4xl md:text-8xl font-[900] text-white tracking-[-0.05em] leading-[0.85]">Stay <br /> <span className="text-[#5454D4]">Connected.</span></h3>
                    </div>
                    
                    <div className="space-y-10 md:space-y-16">
                        <motion.div 
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-6 md:gap-12 group cursor-pointer"
                        >
                            <div className="w-16 h-16 md:w-24 md:h-24 bg-[#1A1C1C] rounded-xl flex items-center justify-center text-[#5454D4] border border-white/5 group-hover:bg-[#5454D4] group-hover:text-white transition-all duration-700 shadow-xl shadow-[#5454D4]/5">
                                <span className="text-2xl md:text-4xl">📬</span>
                            </div>
                            <div className="space-y-2">
                                <p className="label-caps !text-[10px] md:!text-[11px] !text-[#918F9F] tracking-[0.2em] md:tracking-[0.4em]">My Email</p>
                                <p className="text-lg md:text-3xl font-[900] text-white tracking-tight leading-none group-hover:text-[#5454D4] transition-colors duration-500">rohitranjanrrsingh@gmail.com</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 md:space-y-16 bg-[#1A1C1C] p-6 md:p-20 rounded-2xl border border-white/5 relative group">
                    <div className="absolute inset-0 bg-[#5454D4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-2xl pointer-events-none"></div>
                    
                    <div className="grid sm:grid-cols-2 gap-8 md:gap-16">
                        <div className="space-y-4 md:space-y-6">
                            <label className="label-caps !text-[9px] md:!text-[11px] tracking-[0.3em] !text-[#918F9F]">Full Name</label>
                            <input 
                                {...register("name", { required: true })} 
                                className="w-full bg-transparent border-b-2 border-white/10 py-3 md:py-6 text-base md:text-2xl text-white outline-none focus:border-[#5454D4] transition-all duration-500 font-medium placeholder:text-white/5"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="space-y-4 md:space-y-6">
                            <label className="label-caps !text-[9px] md:!text-[11px] tracking-[0.3em] !text-[#918F9F]">Email Address</label>
                            <input 
                                {...register("email", { required: true })} 
                                className="w-full bg-transparent border-b-2 border-white/10 py-3 md:py-6 text-base md:text-2xl text-white outline-none focus:border-[#5454D4] transition-all duration-500 font-medium placeholder:text-white/5"
                                placeholder="mail@example.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                        <label className="label-caps !text-[9px] md:!text-[11px] tracking-[0.3em] !text-[#918F9F]">Project Details</label>
                        <textarea 
                            {...register("query", { required: true })} 
                            rows={4}
                            className="w-full bg-transparent border-b-2 border-white/10 py-3 md:py-6 text-base md:text-2xl text-white outline-none focus:border-[#5454D4] transition-all duration-500 resize-none font-medium placeholder:text-white/5"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        className="btn-primary w-full py-6 md:py-10 text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-black shadow-[0_20px_50px_rgba(84,84,212,0.3)]"
                    >
                        Send Message
                    </motion.button>
                </form>
            </div>
        </section>
    );
}

export default Contact;