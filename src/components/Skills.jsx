import { Code2, Server, Database, Cloud, GitBranch, Terminal } from "lucide-react";

const categories = [
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: [
      "Java",
      "JavaScript (ES6+)",
      "Python",
      "SQL",
      "HTML5 / CSS3",
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React (Vite)",
      "JavaScript (ES202x)",
      "HTML5",
      "CSS Modules",
      "Responsive UI / Accessibility",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      "Node.js / Express",
      "Python FastAPI",
      "RESTful API Design",
      "JWT Authentication",
      "NGINX (Reverse Proxy)",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MSSQL", "MongoDB", "Redis (Caching)"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    badge: "AWS Cloud Practitioner",
    skills: ["AWS (EC2, RDS, S3)", "Docker", "GitHub Actions (CI/CD)", "Linux"],
  },
  {
    title: "Tooling & Workflow",
    icon: GitBranch,
    skills: ["Git / GitHub", "ImageKit", "Multer", "Debugging & Testing", "Code Reviews"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span>
        </h2>

        {/* Core Stack Tags */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          {["JavaScript", "Python", "Java", "React", "Node.js", "FastAPI", "PostgreSQL", "AWS"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-card/50 px-4 py-1 text-sm text-foreground/90"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {categories.map(({ title, icon: Icon, skills, badge }) => (
            <div key={title} className="gradient-border p-6 card-hover h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  {badge && (
                    <span className="mt-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                      {badge}
                    </span>
                  )}
                </div>
              </div>
              <ul className="mt-2 grid grid-cols-1 gap-2">
                {skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
