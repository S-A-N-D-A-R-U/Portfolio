import React from "../assets/react.png"

export const skillsData = {
  frontendDevelopment: [
    { name: "React", icon: React },
    { name: "Next.js", icon: "../src/assets/next.png" },
    { name: "Redux", icon: "../src/assets/redux.png" },
    { name: "TailwindCSS", icon: "../src/assets/tailwind.png" },
  ],
  programmingLanguage: [
    { name: "JavaScript", icon: "../src/assets/javascript.png" },
    { name: "TypeScript", icon: "../src/assets/typescript.png" },
    { name: "Python", icon: "../src/assets/python.png" },
    { name: "Java", icon: "../src/assets/java.png" },
  ],
  backendDevelopment: [
    { name: "Node.js", icon: "../src/assets/node.png" },
    { name: "Express.js", icon: "../src/assets/express.png" },
    { name: "MongoDB", icon: "../src/assets/mongodb.png" },
    { name: "MySQL", icon: "../src/assets/mysql.png" },
  ],
  cloudAndTools: [
    { name: "Docker", icon: "../src/assets/docker.png" },
    { name: "Google Cloud", icon: "../src/assets/google-cloud.png" },
    { name: "Postman", icon: "../src/assets/postman.png" },
    { name: "Git", icon: "../src/assets/github.png" },
  ],
 
};

export const projects = [
  {
    title: "TSL Tours Website",
    description:
      "Travel agency website with custom tour planning, user-friendly tour booking, and a showcase of tour packages and destinations. The site also features a blog for travel tips and insights.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl:
      "../src/assets/project1.jpg",
    demoUrl: "https://tsltours-web-site.vercel.app",
    githubUrl: "https://github.com/S-A-N-D-A-R-U/tsltours-web-site",
  },
  {
    title: "Netflix-GPT",
    description:
      "Netflix-inspired web application with AI-powered search functionality and real-time content updates using TMDb API.",
    tags: ["React", "Firebase", "Redux Toolkit", "Gemini"],
    imageUrl:
      "../src/assets/project2.jpeg",
    demoUrl: "",
    githubUrl: "https://github.com/S-A-N-D-A-R-U/netflix-clone",
  },
  {
    title: "Titan Fitness MMS",
    description:
      "A web-based Member Management System for Titan Fitness Center, streamlining operations with features for member registration, progress tracking, trainer schedules, attendance, and admin dashboard control.",
    tags: ["React", "Express.js", "Node.js", "MongoDB"],
    imageUrl:
      "../src/assets/project3.png",
    demoUrl: "",
    githubUrl: "https://github.com/sachishehan/Web-Based-Member-Management-System-for-Titan-Fitness-Center",
  },
];
