import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "ABC Technologies",
      duration: "Jan 2023 - Present",
      responsibilities: [
        "Developing responsive websites using React and Node.js",
        "Collaborating with cross-functional teams to design and implement new features",
        "Writing clean, reusable, and efficient code",
        "Optimizing website performance and ensuring SEO best practices",
      ],
      skills: ["React", "Node.js", "HTML", "CSS", "JavaScript", "Git"],
      achievements: "Successfully led the development of a client project that increased traffic by 30%.",
    },
    {
      title: "Frontend Developer Intern",
      company: "XYZ Solutions",
      duration: "Jun 2022 - Dec 2022",
      responsibilities: [
        "Assisted in building user-friendly interfaces using React",
        "Worked closely with the design team to implement UI/UX improvements",
        "Tested and debugged front-end code",
      ],
      skills: ["React", "JavaScript", "HTML", "CSS", "Figma"],
      achievements: "Contributed to a project that improved website load speed by 20%.",
    },
  ];

  return (
    <section id="experience" className="py-12 bg-gray-900 text-white">
      <h2 className="text-3xl text-center font-bold mb-8">My Experience</h2>
      <div className="max-w-6xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="card shadow-lg bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <h4 className="text-md text-gray-400">{exp.company}</h4>
            <p className="text-sm text-gray-400 mt-1">{exp.duration}</p>
            <ul className="mt-4 space-y-2">
              <strong className="text-lg">Responsibilities:</strong>
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="text-sm text-gray-300">{task}</li>
              ))}
            </ul>
            <div className="mt-4">
              <strong className="text-lg">Skills:</strong>
              <p className="text-sm text-gray-300">{exp.skills.join(", ")}</p>
            </div>
            <div className="mt-4">
              <strong className="text-lg">Achievements:</strong>
              <p className="text-sm text-gray-300">{exp.achievements}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
