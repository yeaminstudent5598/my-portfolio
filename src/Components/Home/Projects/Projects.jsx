import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiNodejs, DiMongodb } from 'react-icons/di';
import { SiExpress, SiTailwindcss, SiFirebase, SiDaisyui, SiNextdotjs, SiPostgresql, SiPrisma, SiShadcnui } from 'react-icons/si';
import { FiExternalLink, FiGithub, FiInfo, FiLock } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: "guptodhan",
      title: "Guptodhan - Integrated Multi-Module Platform",
      description: "A massive unified platform integrating four distinct pillars: Multi-Vendor E-commerce, C2C Buy & Sell, On-Demand Professional Services, and a Donation Module. Features role-based panels for users, vendors, and service providers.",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Node.js", icon: <DiNodejs /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
      link: "https://www.guptodhandigital.com/", 
      repo: "#",
      isPrivate: true,
      hasDetails: true,
      image: "https://i.ibb.co.com/PG8vqsBb/www-guptodhandigital-com-3.png", 
    },
    {
      id: "vistara",
      title: "Vistara - Local Guide Platform",
      description: "A full-stack platform connecting travelers with local guides. Features role-based dashboards, secure booking with SSLCommerz, and interactive reviews.",
      technologies: [
        { name: "Next.js 16", icon: <SiNextdotjs /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Prisma", icon: <SiPrisma /> },
        { name: "Shadcn UI", icon: <SiShadcnui /> },
      ],
      link: "https://local-guide-platform.vercel.app/",
      repo: "https://github.com/yeaminstudent5598/local-guide-platform",
      isPrivate: false,
      hasDetails: false,
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop", 
    },
    {
      id: "roktokhoj",
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
      isPrivate: false,
      hasDetails: false,
      image: "https://i.ibb.co/N6m8Mk2F/image.png",
    },
    {
      id: "amar-shodai",
      title: "Amar Shodai",
      description: "A fully dynamic e-commerce platform built for organic and specialty product sellers. Features inventory management, dynamic product categorization, seller dashboard, and order management. Designed to be easily customizable for any type of product business.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
      link: "https://pro-ecommerce-iota.vercel.app/",
      repo: "https://github.com/yeaminstudent5598/ready-fish-farm.git",
      isPrivate: false,
      hasDetails: false,
      image: "https://i.ibb.co.com/0pvVK2p1/Whats-App-Image-2025-09-17-at-17-41-49-8ba3fe82.jpg",
    },
    {
      id: "parcel-go",
      title: "Parcel Go",
      description: "Delivery management platform connecting senders and couriers with real-time tracking.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <DiNodejs /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Express", icon: <SiExpress /> },
      ],
      link: "https://parcel-go.vercel.app/",
      repo: "https://github.com/yeaminstudent5598/parcel-go.git",
      isPrivate: false,
      hasDetails: false,
      image: "https://i.ibb.co.com/9HhLcb7K/Whats-App-Image-2025-09-17-at-17-59-39-6e0f717a.jpg",
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-900 text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing integrated solutions and modern web applications.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div className={`relative w-full ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="overflow-hidden rounded-xl shadow-2xl border border-gray-700 bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>

              <div className={`w-full ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                  {project.isPrivate && (
                    <span className="block mt-2 text-sm text-amber-400 italic">
                      Note: Source code is private as this is a commercial project.
                    </span>
                  )}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-gray-800 border border-gray-700 text-emerald-400"
                    >
                      {tech.icon} {tech.name}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-lg"
                  >
                    <FiExternalLink size={18} /> Live Site
                  </a>
                  
                  {project.hasDetails && (
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white border border-emerald-500 rounded-lg hover:bg-emerald-500/10 transition-all"
                    >
                      <FiInfo size={18} /> View Details
                    </Link>
                  )}

                  {project.isPrivate ? (
                    <button
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-gray-500 border border-gray-700 rounded-lg cursor-not-allowed"
                      title="Source code is private for company project"
                    >
                      <FiLock size={18} /> Private Code
                    </button>
                  ) : (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white border border-gray-600 rounded-lg"
                    >
                      <FiGithub size={18} /> Code
                    </a>
                  )}
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