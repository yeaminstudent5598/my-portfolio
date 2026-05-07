import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiExternalLink, FiArrowLeft, FiCheckCircle, FiLock, FiLayout, FiSmartphone, FiUsers } from 'react-icons/fi';
import { SiNextdotjs, SiExpress, SiTailwindcss, SiMongodb, SiPython, SiFastapi, SiRedis, SiFramer, SiTypescript } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { FaBrain } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();

  // Project Database
  const projectsData = {
    "modasource": {
      title: "Moda Source International - Global Sourcing Platform",
      subtitle: "Premium B2B Corporate Platform & Supply Chain Solution",
      description: "Developed a high-performance corporate platform for a global apparel sourcing agency. Engineered a sophisticated UI with supply chain visualization, dynamic service modules, and SEO optimization for international B2B outreach. The platform serves as the primary digital identity for their operations across Dubai, China, Chile, and Bangladesh.",
      bannerImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      fullViewImage: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=2070&auto=format&fit=crop",
      liveLink: "https://www.modasourceinternational.com/",
      isPrivate: true,
      stack: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Framer Motion", icon: <SiFramer /> },
        { name: "TypeScript", icon: <SiTypescript /> }
      ],
      features: [
        "Responsive Corporate Identity: A clean, modern, and high-end UI designed to meet international B2B standards.",
        "Dynamic Service Modules: Interactive showcases for Global Sourcing, Quality Control, and ESG commitments.",
        "Global Presence Tracker: A visual and interactive representation of offices in Dubai, China, Chile, and Bangladesh.",
        "High Performance Core: Optimized for Core Web Vitals to ensure fast loading times across global regions.",
        "Brand Integration: Automated marquee systems showcasing 100+ audited partner factories and retail brands."
      ],
      challenges: "The primary challenge was balancing high-fidelity fashion imagery with performance optimization. I implemented advanced image optimization techniques and lazy-loading strategies to maintain a premium feel without sacrificing speed.",
      teamInfo: {
        total: 1,
        role: "Lead Developer & Technical Architect",
        team: [
          "1 Full Stack Developer (Solo Project)"
        ]
      },
      responsibilities: [
        "End-to-end frontend and backend development using Next.js App Router.",
        "Implementation of custom Helvetica-based typography and #C89B3C (Gold) branding.",
        "Developing animated supply chain and capability modules using Framer Motion.",
        "Performance tuning and SEO optimization for global apparel markets.",
        "Responsive layout engineering for seamless cross-device compatibility."
      ],
      futurePlans: "Interactive real-time supply chain tracking for B2B clients and multi-language support (Spanish and Arabic) for international stakeholders."
    },
    "guptodhan": {
      title: "Guptodhan - Integrated Multi-Module Platform",
      subtitle: "Full Stack Development & Project Management",
      description: "Led the technical development of a massive unified platform integrating four distinct pillars: Multi-Vendor E-commerce, C2C Buy & Sell, On-Demand Professional Services, and a Donation Module. Served as Backend Developer and Project Manager, overseeing the technical architecture and team coordination.",
      bannerImage: "https://i.ibb.co.com/PG8vqsBb/www-guptodhan-com-3.png",
      fullViewImage: "https://i.ibb.co.com/x8c7XvZb/www-guptodhan-com-1.png",
      liveLink: "https://www.guptodhan.com/",
      isPrivate: true,
      stack: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Node.js", icon: <DiNodejs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ],
      features: [
        "Multi-Vendor E-commerce: Smart search, order tracking, vendor KYC, SSLCommerz payment integration.",
        "C2C Buy & Sell: Location-filtered ad posting, real-time chat system between buyers & sellers.",
        "On-Demand Service: Comprehensive booking system with professional service provider management.",
        "Donation Module: Goal-based charitable campaigns with SSLCommerz payment integration.",
        "Payment Processing: Complete payment flow implementation with multiple gateways."
      ],
      challenges: "Managed unified database schema while integrating complex booking logic for services alongside traditional product inventory.",
      teamInfo: {
        total: 8,
        role: "Backend Developer & Project Manager",
        team: [
          "3 Frontend Developers",
          "2 Backend Developers (including me)",
          "2 Flutter App Developers",
          "1 UI/UX Designer"
        ]
      },
      responsibilities: [
        "Backend API Architecture & Development using Node.js & Express",
        "Frontend Development with Next.js & Tailwind CSS",
        "Database Schema Design & MongoDB Optimization",
        "Team Coordination & Technical Leadership"
      ],
      futurePlans: "Real-time chat system between buyers and sellers for C2C module. Automated background checks for service provider onboarding."
    },
    "outreach-ai": {
      title: "OutreachAI - B2B Cold Email SaaS",
      subtitle: "AI-Powered Lead Generation & Outreach Automation",
      description: "Developed a multi-agent B2B SaaS platform for autonomous cold email outreach and lead generation at scale. Integrated Google Gemini for AI-powered personalized email generation.",
      bannerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      fullViewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      liveLink: "https://outreachai-beta.vercel.app/",
      isPrivate: true,
      stack: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Python", icon: <SiPython /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Redis & BullMQ", icon: <SiRedis /> },
        { name: "Gemini AI", icon: <FaBrain /> }
      ],
      features: [
        "Multi-Agent Pipeline: Autonomous lead scraping and data enrichment.",
        "AI Personalization: Google Gemini integration for hyper-personalized emails.",
        "Scalable Job Queues: BullMQ and Redis for managing background tasks.",
        "Campaign Dashboard: Real-time analytics for tracking success rates.",
        "Automated Follow-ups: Smart scheduling logic for outreach sequences."
      ],
      challenges: "Designing a highly reliable background processing architecture that respects rate limits and scales efficiently.",
      teamInfo: {
        total: 1,
        role: "Lead Architect & Full Stack Developer",
        team: [
          "1 Full Stack & AI Developer (Solo Project)"
        ]
      },
      responsibilities: [
        "End-to-End Platform Architecture and Full Stack Development",
        "Python FastAPI integration for heavy backend operations",
        "Prompt Engineering and Gemini API Integration",
        "Implementing BullMQ and Redis for scalable job queues"
      ],
      futurePlans: "Integration with LinkedIn for omnichannel outreach. Advanced A/B testing analytics."
    }
  };

  const project = projectsData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0b1120] text-white flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-emerald-400 mb-4">Project Not Found</h2>
        <Link to="/#projects" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <FiArrowLeft /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1120] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <Link 
              to="/#projects"
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-4 transition-colors font-medium"
            >
              <FiArrowLeft /> Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              {project.title}
            </h1>
            <p className="text-emerald-300 text-lg mt-2">{project.subtitle}</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-emerald-500/20 transition-all">
              <FiExternalLink /> Preview Live
            </a>
            <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-6 py-3 rounded-xl font-bold text-gray-400">
              <FiLock /> {project.isPrivate ? 'Private Source' : 'Public Source'}
            </div>
          </div>
        </div>

        {/* Main Banner Showcase */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-16 group bg-gray-800/50">
          <img 
            src={project.bannerImage} 
            alt={`${project.title} Banner`} 
            className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700 opacity-90 group-hover:opacity-100"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <FiLayout className="text-emerald-400" /> Project Overview
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* Role & Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <FiUsers className="text-cyan-400" /> My Role & Responsibilities
              </h2>
              <div className="bg-gray-800/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                <p className="text-cyan-400 font-bold mb-2 text-xl">{project.teamInfo.role}</p>
                <p className="text-emerald-400/80 text-sm mb-6 font-medium">Core Contributor</p>
                <ul className="space-y-4">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <FiCheckCircle className="text-emerald-400" /> Core Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="p-6 bg-gray-800/30 border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-colors">
                    <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* UI/UX Showcase */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <FiSmartphone className="text-emerald-400" /> Web Interface Showcase
              </h2>
              <div className="bg-gray-800/30 rounded-3xl p-4 border border-white/5">
                <div className="bg-gray-900 rounded-2xl overflow-hidden max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-500 border border-white/5">
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
              <section className="bg-gray-800/30 p-8 rounded-3xl border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Technical Challenges</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.challenges}</p>
              </section>
              <section className="bg-gray-800/30 p-8 rounded-3xl border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-purple-400">Future Roadmap</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.futurePlans}</p>
              </section>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="bg-gray-800/30 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Tech Stack</h3>
              <div className="space-y-6">
                {project.stack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <span className="text-3xl text-emerald-400 group-hover:scale-110 transition-transform">{tech.icon}</span>
                    <span className="text-gray-300 font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Info */}
            <div className="bg-purple-900/10 p-8 rounded-3xl border border-purple-500/20">
              <h4 className="text-lg font-bold mb-4 text-purple-300 border-b border-purple-500/20 pb-4">Team Composition</h4>
              <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">{project.teamInfo.total} Member{project.teamInfo.total > 1 ? 's' : ''}</p>
              <ul className="space-y-3">
                {project.teamInfo.team.map((member, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-center gap-3">
                    <span className="text-purple-400 text-lg">•</span>
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