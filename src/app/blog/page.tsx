import React from "react";

export const metadata = {
  title: "Blog | Rohit Kumar",
  description: "Insights on Full Stack Development, Next.js, and modern web engineering by Rohit Kumar.",
};

export default function BlogPage() {
  return (
    <main className="pt-60 min-h-screen">
        <section className="max-w-screen-2xl container mx-auto px-6 sm:px-12 md:px-20 text-center space-y-12">
            <p className="label-caps !text-[#C1C1FF]">Engineering Journal</p>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-[900] text-white tracking-[-0.05em] leading-none">
                Coming <span className="text-[#5454D4]">Soon.</span>
            </h2>
            <p className="text-2xl text-[var(--text-soft)] max-w-2xl mx-auto leading-relaxed">
                I'm currently architecting some deep dives into Next.js, Performance Optimization, and SaaS development. Stay tuned.
            </p>
        </section>
    </main>
  );
}
