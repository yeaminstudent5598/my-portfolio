import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      degree: "SSC",
      school: "Domsar J.C. Institution School & College",
      year: "Year: 2021",
      gpa: "GPA: 3.00",
      stream: "Science",
    },
    {
      degree: "HSC",
      school: "Mazid Jarina Foundation School & College",
      year: "Year: 2023",
      gpa: "GPA: 3.50",
      stream: "Humanities",
    },
  ];

  return (
    <section className="min-h-screen bg-[#0f1629] py-40">
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-8">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="relative group border-2 rounded-xl transition-all duration-500 border-blue-400"
            >
              <div className="relative rounded-lg bg-[#0f1629] p-8 transition-all duration-300 hover:bg-[#1a243a]">
                {/* Button group (red, yellow, green) */}
                <div className="flex justify-start gap-2 absolute top-3 left-3">
                  <button className="w-2.5 h-2.5 bg-red-500 rounded-full transition-all hover:bg-red-600"></button>
                  <button className="w-2.5 h-2.5 bg-yellow-400 rounded-full transition-all hover:bg-yellow-500"></button>
                  <button className="w-2.5 h-2.5 bg-green-500 rounded-full transition-all hover:bg-green-600"></button>
                </div>

                {/* Featured Education Label */}
                <div className="mb-2 text-emerald-500 text-sm font-medium tracking-wide">
                  FEATURED EDUCATION
                </div>

                {/* Education details */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">📘</span>
                      <h3 className="text-2xl font-bold text-slate-200">{edu.degree}</h3>
                    </div>
                    <p className="text-lg text-slate-400 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star w-5 h-5 text-teal-500"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      {edu.school}
                    </p>
                    <p className="text-slate-500 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar w-4 h-4"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      {edu.year}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 transition-colors duration-300 flex items-center gap-2 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-award w-4 h-4"
                      >
                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                        <circle cx="12" cy="8" r="6"></circle>
                      </svg>
                      <span>{edu.gpa}</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-500 hover:bg-teal-500/20 transition-colors duration-300 flex items-center gap-2 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-award w-4 h-4"
                      >
                        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                        <circle cx="12" cy="8" r="6"></circle>
                      </svg>
                      <span>Stream: {edu.stream}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center text-white pt-20">
  <div className="flex items-center space-x-4">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
    <p className="text-lg font-semibold">New education is loading...</p>
  </div>
  <div className="mt-6 text-center">
    <p className="text-sm text-gray-400">Stay tuned!</p>
  </div>
</div>

      </div>
    </section>
  );
};

export default Education;
