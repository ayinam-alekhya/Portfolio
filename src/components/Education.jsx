// src/pages/Education.jsx
import { GraduationCap } from "lucide-react";

export const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "University of South Florida – Tampa, FL",
      duration: "Aug 2023 – May 2025",
      description:
        "Advanced graduate coursework in Software Engineering, Artificial Intelligence, and Cloud Computing.Developed scalable and secure applications, explored data-driven intelligence, and gained hands-on experience with algorithms, machine learning models, and modern full-stack frameworks.",
      skills: ["Theory of Algorithms", "Artificial Intelligence", "Security & Privacy in ML", "Database Management Systems"],
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "PVP Siddhartha Institute of Technology – Vijayawada, India",
      duration: "Jun 2019 – May 2023",
      description:
        "Comprehensive undergraduate program emphasizing Data Structures, Algorithms, and System Design.Built a strong foundation in software development, database management, and object-oriented programming through practical projects and research-driven learning.",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "Web App Development"],
    },
  ];
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-primary">Education</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My academic journey blends technical depth with real-world project experience,
          shaping my path as a software engineer.
        </p>

        {/* Timeline container */}
        <div className="relative border-l-2 border-primary/50 ml-6 space-y-12">
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className="relative pl-10 animate-fade-in"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-10px] top-2 w-4 h-4 bg-primary rounded-full border-2 border-background shadow-[0_0_10px_rgba(139,92,246,0.6)]"></div>

              {/* Card */}
              <div className="space-y-6 gradient-border rounded-md p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="text-lg md:text-xl font-semibold">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-primary">
                    {edu.duration}
                  </p>
                </div>

                <p className="text-sm text-foreground/80 mt-2">
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  {edu.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {edu.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-primary/5 text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
