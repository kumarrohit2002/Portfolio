import React from "react";
import Contact from "../../components/Contact";

export const metadata = {
  title: "Contact | Rohit Kumar",
  description: "Get in touch with Rohit Kumar for freelance inquiries, full-stack development projects, or technical consulting.",
};

export default function ContactPage() {
  return (
    <main className="pt-32">
      <Contact />
    </main>
  );
}
