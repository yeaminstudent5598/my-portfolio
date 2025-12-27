import React from 'react';
import { FiExternalLink, FiArrowLeft, FiCheckCircle, FiLock, FiLayout, FiSmartphone, FiUsers } from 'react-icons/fi';
import { SiNextdotjs, SiExpress, SiTailwindcss, SiMongodb } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';

const ProjectDetails = () => {
  const project = {
    title: "Guptodhan - Integrated Multi-Module Platform",
    subtitle: "Full Stack Development & Project Management",
    description: "Led the technical development of a massive unified platform integrating four distinct pillars: Multi-Vendor E-commerce, C2C Buy & Sell, On-Demand Professional Services, and a Donation Module. Served as Backend Developer and Project Manager, overseeing the technical architecture and team coordination.",
    bannerImage: "https://i.ibb.co.com/PG8vqsBb/www-guptodhandigital-com-3.png",
    fullViewImage: "https://i.ibb.co.com/x8c7XvZb/www-guptodhandigital-com-1.png",
    liveLink: "https://guptodhan-main.vercel.app/",
    isPrivate: true,
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <DiNodejs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ],
    features: [
      "Multi-Vendor E-commerce: Smart search, order tracking, vendor KYC, SSLCommerz payment integration, product details page, checkout flow (Full Stack)",
      "C2C Buy & Sell: Location-filtered ad posting, real-time chat system between buyers & sellers (Frontend + Backend)",
      "On-Demand Service: Comprehensive booking system with professional service provider management",
      "Donation Module: Goal-based charitable campaigns with SSLCommerz payment integration (Full Stack)",
      "Payment Processing: Complete payment flow implementation (Frontend + Backend) with multiple gateways"
    ],
    challenges: "Managed unified database schema while integrating complex booking logic for services alongside traditional product inventory. Ensured seamless UI/UX across four vastly different modules through high-fidelity prototyping and responsive design.",
    teamInfo: {
      total: 8,
      role: "Backend Developer & Project Manager",
      team: [
        "3 Frontend Developers",
        "2 Backend Developers (including you)",
        "2 Flutter App Developers",
        "1 UI/UX Designer"
      ]
    },
    responsibilities: [
      "Backend API Architecture & Development using Node.js & Express",
      "Frontend Development with Next.js & Tailwind CSS",
      "Database Schema Design & MongoDB Optimization",
      "Team Coordination & Technical Leadership",
      "Full Stack Implementation: Product Details, My Profile, Checkout, Donation pages Etc.",
      "Real-time Chat System (C2C Module) - Frontend & Backend",
      "Payment Gateway Integration & Processing (SSLCommerz) - Full Stack",
      "Project Timeline & Milestone Management"
    ],
    futurePlans: "Real-time chat system between buyers and sellers for C2C module. Automated background checks for service provider onboarding."
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div>
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-4 transition-colors font-medium"
            >
              <FiArrowLeft /> Back to Portfolio
            </button>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              {project.title}
            </h1>
            <p className="text-emerald-300 text-lg mt-2">{project.subtitle}</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20">
              <FiExternalLink /> Preview Live
            </a>
            <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded-xl font-bold text-gray-400">
              <FiLock /> Client Project
            </div>
          </div>
        </div>

        {/* Main Banner Showcase */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-700 shadow-2xl mb-16 group">
          <img 
            src={project.bannerImage} 
            alt="Guptodhan Banner" 
            className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FiLayout className="text-emerald-400" /> Project Overview
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* Role & Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FiUsers className="text-cyan-400" /> My Role & Responsibilities
              </h2>
              <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-6 rounded-xl border border-cyan-500/20">
                <p className="text-cyan-300 font-semibold mb-4 text-lg">{project.teamInfo.role}</p>
              <p className="text-emerald-300 text-sm mb-6 font-medium">Full Stack Developer (Frontend + Backend)</p>
                <ul className="space-y-3">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FiCheckCircle className="text-emerald-400" /> Core Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="p-4 bg-gray-800/40 border border-gray-700 rounded-xl hover:border-emerald-500/50 transition-colors">
                    <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* UI/UX Showcase */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FiSmartphone className="text-emerald-400" /> Web Interface Showcase
              </h2>
              <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700">
                <div className="bg-gray-900 rounded-xl overflow-hidden max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-500 border border-gray-800">
                  <img 
                    src={project.fullViewImage} 
                    alt="Full Homepage View" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-gray-500 mt-4 text-sm italic">Scroll to view full page design</p>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Technical Challenges</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.challenges}</p>
              </section>
              <section className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Future Roadmap</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.futurePlans}</p>
              </section>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700">
              <h3 className="text-xl font-bold mb-8">Tech Stack</h3>
              <div className="space-y-6">
                {project.stack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-3xl text-emerald-400">{tech.icon}</span>
                    <span className="text-gray-300 font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Info */}
            <div className="bg-gradient-to-b from-purple-900/20 to-gray-900 p-6 rounded-2xl border border-purple-500/30">
              <h4 className="text-lg font-bold mb-4 text-purple-300">Team Composition</h4>
              <p className="text-2xl font-bold text-purple-400 mb-4">{project.teamInfo.total} Members</p>
              <ul className="space-y-2">
                {project.teamInfo.team.map((member, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="text-purple-400">•</span>
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;