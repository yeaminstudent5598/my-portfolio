import React from 'react';
import { FaReact } from 'react-icons/fa';
import { DiNodejs, DiMongodb } from 'react-icons/di';
import { SiExpress, SiTailwindcss, SiFirebase, SiDaisyui } from 'react-icons/si';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "CrowdCube",
      description: "Crowdfunding platform for startups to raise capital.",
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
      title: "TaskHub",
      description: "A study management app for students.",
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
      description: "Explore the latest gadgets with details.",
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
    <section id="projects" className="py-12 px-10 bg-gray-900 text-white">
      <h2 className="text-3xl text-center font-bold mb-8">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card flex flex-col bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 min-h-[200px]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-56 object-cover"
            />
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400 mt-1 line-clamp-2">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-md"
                >
                  {tech.icon} {tech.name}
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-blue-400 hover:text-blue-600"
              >
                <FiExternalLink className="mr-1" /> Live
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-blue-400 hover:text-blue-600"
              >
                <FiGithub className="mr-1" /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
