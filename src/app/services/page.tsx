import React from "react";
import Experience from "../../components/Experience";

export const metadata = {
  title: "Services | Rohit Kumar",
  description: "Advanced Full Stack Development, SaaS Architecture, and Workflow Automation services by Rohit Kumar.",
};

export default function ServicesPage() {
  return (
    <main className="pt-32">
        <section className="max-w-screen-2xl container mx-auto px-6 sm:px-12 md:px-20 py-24">
            <div className="space-y-8 mb-24">
                <p className="label-caps !text-[#C1C1FF]">Strategic Solutions</p>
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-[900] text-white tracking-[-0.05em] leading-none">
                    Tailored <span className="text-[#5454D4]">Digital Services.</span>
                </h2>
                <p className="text-2xl text-[var(--text-soft)] max-w-4xl leading-relaxed">
                    I provide end-to-end technical leadership and engineering to transform complex ideas into scalable, high-performance digital products.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { title: "SaaS Product Development", desc: "Engineering multi-tenant scalable platforms with robust multi-layer authentication and real-time features." },
                    { title: "Advanced MERN Solutions", desc: "High-performance full-stack applications built with MongoDB, Express, React, and Node.js for seamless UX." },
                    { title: "Workflow Automation", desc: "Custom automation scripts and API integrations to streamline business processes and enhance productivity." }
                ].map((s, i) => (
                    <div key={i} className="glass-dark p-12 rounded-2xl border border-white/5 space-y-8 group hover:border-[#5454D4]/30 transition-all duration-700">
                        <div className="text-[#5454D4] font-black text-4xl">0{i+1}</div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">{s.title}</h3>
                        <p className="text-[var(--text-soft)] text-lg leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
        <Experience />
    </main>
  );
}
