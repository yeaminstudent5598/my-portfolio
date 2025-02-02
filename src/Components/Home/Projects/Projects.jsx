import React from 'react';
import { FaReact } from 'react-icons/fa'; // React icon
import { DiNodejs } from 'react-icons/di'; // Node.js icon
import { DiMongodb } from 'react-icons/di'; // MongoDB icon
import { SiExpress } from 'react-icons/si'; // Express icon
import { SiStripe } from 'react-icons/si'; // Stripe icon
import { SiTailwindcss } from 'react-icons/si'; // Tailwind CSS icon
import { SiFirebase } from 'react-icons/si'; // Firebase icon
import { SiDaisyui } from 'react-icons/si'; // DaisyUI icon
import { FiExternalLink, FiGithub } from 'react-icons/fi'; // External link and GitHub icons

const Projects = () => {
  const projects = [
    {
      title: "CrowdCube - Investment Crowdfunding Platform",
      description:
        "CrowdCube is a platform for startups to raise capital through crowdfunding. Users can invest in businesses and entrepreneurs can manage campaigns in real-time, showcasing their ventures to potential investors.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <DiNodejs /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "Express", icon: <SiExpress /> },
       
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "DaisyUI", icon: <SiDaisyui /> },
      ],
      link: "https://crowdcube-1ddbb.web.app/",
      repo: "https://github.com/yeaminstudent5598/Crowd-funding-client-side",
      image: "https://i.ibb.co.com/xmTJSgJ/Screenshot-62.png",
    },
    {
      title: "TaskHub - Group Study Management App",
      description:
        "TaskHub web application where students can create, complete, and grade assignments. The platform encourages collaboration and helps manage group study sessions effectively.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <DiNodejs /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "DaisyUI", icon: <SiDaisyui /> },
      ],
      link: "https://task-hub-e1fcb.web.app/",
      repo: "https://github.com/yeaminstudent5598/task-hub-client-side",
      image: "https://i.ibb.co.com/RNB7gcg/Screenshot-61.png",
    },
    {
      title: "Gadget Haven",
      description:
        "Gadgets Haven is a sleek and user-friendly website showcasing the latest gadgets with detailed descriptions and features. It provides an engaging platform for gadget enthusiasts to explore and make informed choices.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "DaisyUI", icon: <SiDaisyui /> },
      ],
      link: "https://gadgets-haven-5598.surge.sh",
      repo: "https://github.com/yeaminstudent5598/Gadget-Haven",
      image: "https://i.ibb.co.com/ww2g08B/Screenshot-60.png",
    },
  ];

  return (
    <section id="projects" className="py-12 pt-20 px-20 bg-gray-900 text-white">
      <h2 className="text-3xl text-center font-bold mb-8">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card flex flex-col  bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="rounded-lg mb-4 w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{project.description}</p>
            <div className="mt-4 ">
              <strong className="text-lg">Technologies:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <div
                  key={techIndex}
                  className="flex items-center gap-2 px-3 py-1  font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                >
                  <span className="flex-shrink-0 w-6 h-6 text-black flex items-center justify-center">
                    {tech.icon}
                  </span>
                  <span className="text-sm leading-none">{tech.name}</span>
                </div>
                
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-grow items-end gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-lg p-2 border border-1 border-blue-400 text-sm  gap-2 text-blue-400 hover:text-blue-600"
              >
                <FiExternalLink className="text-sm " /> Live Site
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-lg p-2 border border-1 border-blue-400 text-sm  gap-2 text-blue-400 hover:text-blue-600"
              >
                <FiGithub className="text-lg" /> GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
