// File: components/Projects.jsx
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
      image: "https://i.ibb.co/SDrCzd7y/Whats-App-Image-2025-09-17-at-17-38-53-dffbc6f4.jpg",
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
      image: "https://i.ibb.co/F4V7cY9z/Whats-App-Image-2025-09-17-at-17-37-25-f37a1332.jpg",
    },
    {
      title: "RoktoKhoj",
      description: "A platform that connects blood donors and recipients.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Node.js", icon: <DiNodejs /> },
        { name: "MongoDB", icon: <DiMongodb /> },
      ],
      link: "https://roktokhoj.web.app/",
      repo: "https://github.com/yeaminstudent5598/roktokhoj-client-side.git",
      image: "https://i.ibb.co/N6m8Mk2F/image.png",
    },
    {
      title: "Amar Shodai",
      description: "An e-commerce platform for managing and selling fish and aquatic products online with an intuitive admin dashboard.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
      link: "https://ready-fish-farm.netlify.app/",
      repo: "https://github.com/yeaminstudent5598/ready-fish-farm.git",
      image: "https://i.ibb.co/0pvVK2p1/Whats-App-Image-2025-09-17-at-17-41-49-8ba3fe82.jpg",
    },
    {
      title: "Parcel Go",
      description: "Delivery management platform connecting senders and couriers, with real-time tracking and seamless logistics.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <DiNodejs /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Express", icon: <SiExpress /> },
      ],
      link: "https://parcel-go.vercel.app/",
      repo: "https://github.com/yeaminstudent5598/parcel-go.git",
      image: "https://i.ibb.co.com/9HhLcb7K/Whats-App-Image-2025-09-17-at-17-59-39-6e0f717a.jpg", // Replace with actual screenshot if you have one
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here's a detailed look at some of my work.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Image Column */}
              <div className={`relative w-full ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="overflow-hidden rounded-lg shadow-xl border border-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-70  aspect-video transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className={`w-full ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-400 mb-6">
                  {project.description}
                </p>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      {tech.icon} {tech.name}
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-lg shadow-sm hover:from-emerald-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <FiExternalLink /> Live Site
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:gap-3"
                  >
                    <FiGithub /> View Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
