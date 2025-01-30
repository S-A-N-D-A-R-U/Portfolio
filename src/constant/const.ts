import React from "../assets/react.png"
import Next from "../assets/next.png"
import Redux from "../assets/redux.png"
import TailwindCSS from "../assets/tailwind.png"
import JavaScript from "../assets/javascript.png"
import TypeScript from "../assets/typescript.png"
import Python from "../assets/python.png"
import Java from "../assets/java.png"
import Node from "../assets/node.png"
import Express from "../assets/express.png"
import MongoDB from "../assets/mongodb.png"
import MySQL from "../assets/mysql.png"
import GoogleCloud from "../assets/google-cloud.png"
import Postman from "../assets/postman.png"
import Git from "../assets/github.png"
import Docker from "../assets/docker.png"

import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpeg"
import project3 from "../assets/project3.jpg"



export const skillsData = {
  frontendDevelopment: [
    { name: "React", icon: React },
    { name: "Next.js", icon: Next  },
    { name: "Redux", icon: Redux },
    { name: "TailwindCSS", icon: TailwindCSS },
  ],
  programmingLanguage: [
    { name: "JavaScript", icon: JavaScript },
    { name: "TypeScript", icon: TypeScript },
    { name: "Python", icon: Python },
    { name: "Java", icon: Java },
  ],
  backendDevelopment: [
    { name: "Node.js", icon: Node },
    { name: "Express.js", icon: Express },
    { name: "MongoDB", icon: MongoDB },
    { name: "MySQL", icon: MySQL },
  ],
  cloudAndTools: [
    { name: "Docker", icon: Docker },
    { name: "Google Cloud", icon: GoogleCloud },
    { name: "Postman", icon: Postman },
    { name: "Git", icon: Git },
  ],
 
};

export const projects = [
  {
    title: "TSL Tours Website",
    description:
      "Travel agency website with custom tour planning, user-friendly tour booking, and a showcase of tour packages and destinations. The site also features a blog for travel tips and insights.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    imageUrl: project1,
    demoUrl: "https://tsltours-web-site.vercel.app",
    githubUrl: "https://github.com/S-A-N-D-A-R-U/tsltours-web-site",
  },
  {
    title: "Netflix-GPT",
    description:
      "Netflix-inspired web application with AI-powered search functionality and real-time content updates using TMDb API.",
    tags: ["React", "Firebase", "Redux Toolkit", "Gemini"],
    imageUrl: project2,
    demoUrl: "",
    githubUrl: "https://github.com/S-A-N-D-A-R-U/netflix-clone",
  },
  {
    title: "Titan Fitness MMS",
    description:
      "A web-based Member Management System for Titan Fitness Center, streamlining operations with features for member registration, progress tracking, trainer schedules, attendance, and admin dashboard control.",
    tags: ["React", "Express.js", "Node.js", "MongoDB"],
    imageUrl: project3,
    demoUrl: "",
    githubUrl: "https://github.com/sachishehan/Web-Based-Member-Management-System-for-Titan-Fitness-Center",
  },
];
