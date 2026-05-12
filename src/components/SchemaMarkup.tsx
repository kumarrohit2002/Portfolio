import React from 'react';

const SchemaMarkup = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rohit Kumar",
    "url": "https://kumarrohit.co",
    "jobTitle": "Full Stack Developer",
    "alumniOf": "Lovely Professional University",
    "knowsAbout": [
      "MERN Stack",
      "Next.js",
      "React.js",
      "Node.js",
      "Database Architecture",
      "API Integration",
      "Workflow Automation",
      "SaaS Development"
    ],
    "sameAs": [
      "https://github.com/kumarrohit2002",
      "https://www.linkedin.com/in/rohit-full-stack-dev"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rohit Kumar Portfolio",
    "url": "https://kumarrohit.co",
    "author": "Rohit Kumar",
    "description": "Premium developer portfolio showcasing advanced full-stack projects and scalable web applications."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;
