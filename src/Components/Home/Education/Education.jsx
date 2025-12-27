import React from 'react';
import { FiBook, FiAward, FiCalendar } from 'react-icons/fi';

const Education = () => {
  const educationDetails = [
    {
      degree: "SSC",
      school: "Domsar J.C. Institution School & College",
      year: "2021",
      gpa: "3.00",
      stream: "Science",
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"]
    },
    {
      degree: "HSC",
      school: "Mazid Jarina Foundation School & College",
      year: "2023",
      gpa: "3.50",
      stream: "Humanities",
      subjects: ["English", "Bengali", "History", "Sociology", "Geography"]
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-gray-900 text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building a strong foundation through quality education
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-8 md:space-y-10">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="group relative border border-gray-700 rounded-2xl transition-all duration-500 hover:border-emerald-500/50 bg-gray-800/30 hover:bg-gray-800/50"
            >
              {/* Window Controls */}
              <div className="flex justify-start gap-2 absolute top-4 left-4">
                <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-all"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-all"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-all"></div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Featured Label */}
                <div className="mb-6 text-emerald-400 text-xs font-bold tracking-widest uppercase">
                  📚 Featured Education
                </div>

                {/* Main Info */}
                <div className="space-y-6">
                  {/* Degree & School */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center gap-3">
                      <FiBook className="text-emerald-400" size={32} />
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-emerald-300 flex items-center gap-2 mb-2">
                      <span className="text-cyan-400">★</span>
                      {edu.school}
                    </p>
                  </div>

                  {/* Year & GPA */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="flex items-center gap-3 text-gray-300">
                      <FiCalendar className="text-cyan-400" size={20} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Year</p>
                        <p className="text-lg font-semibold">{edu.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <FiAward className="text-emerald-400" size={20} />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">GPA</p>
                        <p className="text-lg font-semibold">{edu.gpa}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stream & Subjects */}
                  <div className="pt-6 border-t border-gray-700">
                    <p className="text-sm text-gray-400 mb-4">
                      <span className="font-semibold text-gray-300">Stream:</span> {edu.stream}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-sm font-medium hover:bg-emerald-500/20 transition-colors"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 md:mt-20 p-10 rounded-2xl border border-gray-700 bg-gray-800/30 text-center">
          <div className="flex justify-center mb-4">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-emerald-400 border-t-cyan-500"></div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">More to Come</h3>
          <p className="text-gray-400">Currently pursuing higher education. Stay tuned for updates! 🚀</p>
        </div>
      </div>
    </section>
  );
};

export default Education;