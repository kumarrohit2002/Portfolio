import React from "react";
import About from "../../components/About";

export const metadata = {
  title: "About | Rohit Kumar",
  description: "Learn about Rohit Kumar's background, education, and technical expertise as a Full Stack JavaScript Engineer.",
};

export default function AboutPage() {
  return (
    <main className="pt-32">
      <About />
    </main>
  );
}
