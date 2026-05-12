import React from "react";
import Portfolio from "../../components/Portfolio";

export const metadata = {
  title: "Projects | Rohit Kumar",
  description: "Explore a curated gallery of high-performance web applications, MERN stack projects, and SaaS products developed by Rohit Kumar.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-32">
      <Portfolio />
    </main>
  );
}
