import { Code2, Cloud, Database } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Full-Stack Developer • React/Node & FastAPI</h3>

            <p className="text-muted-forground">
              I’m a full-stack web developer focused on building clean, performant products end-to-end. On the front end I ship responsive, accessible UIs with React (Vite) and modern patterns; on the back end I design REST APIs with Node/Express and Python FastAPI, secure them with JWT, and wire them to reliable data stores.
            </p>

            <p className="text-muted-forground">
              Recent work includes a Food Reels MERN app with scroll-snap video reels and ImageKit uploads, and a FastAPI + MSSQL service (Docker, Redis, NGINX) deployed on AWS (EC2/RDS/S3). I’m AWS Cloud Practitioner certified and comfortable taking features from spec → database → API → UI → deploy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a
                href="/Alekhya_Ayinam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 ">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Web Development</h4>
                  <p className="text-muted-foreground">
                    React (Vite), Node.js/Express, and FastAPI to build scalable, testable features. Strong in component design, state management, REST APIs, and JWT-based auth with a mobile-first UX.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & DevOps</h4>
                  <p className="text-muted-foreground">
                    AWS Cloud Practitioner. Deployments on EC2 with NGINX/Gunicorn-Uvicorn, RDS for SQL Server/Postgres, S3 for media, Docker/Redis for caching, and CI/CD via GitHub Actions.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data & Databases</h4>
                  <p className="text-muted-foreground">
                    Schema design and query optimization with MSSQL/PostgreSQL; MongoDB for document data; Redis for speed. Pragmatic use of indexes, constraints, and migrations for reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
