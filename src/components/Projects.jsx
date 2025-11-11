import { ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Food Reels – Full-Stack MERN Application",
    description:
      "Instagram-style vertical reels with scroll-snap, autoplay in-view, likes/saves, and partner video uploads using Multer + ImageKit. Mobile-first UI with JWT auth.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "ImageKit", "Multer"],
    githubUrl: "https://github.com/ayinam-alekhya/Mini-Food-Reels",
  },
  {
    id: 2,
    title: "Knowledge Retrieval & Task Tree Generation (FOON + AI Search)",
    description:
      "FOON-based task-tree generation with IDS/A* and Monte Carlo Tree Search. Demonstrates planning/reasoning pipelines for robotic manipulation tasks.",
    image: "/projects/project2.png",
    tags: ["Python", "FOON", "A*", "IDS", "MCTS", "AI"],
    githubUrl: "https://github.com/ayinam-alekhya/Knowledge_Retrieval_Task_Tree_Generation",
  },
  {
    id: 3,
    title: "FDA DDI Index Calculation – Flask Web App",
    description:
      "Compute DDI indices and AKI risk via ROR and Apriori rules. Upload datasets, run analytics, and review results in a lightweight Flask UI.",
    image: "/projects/project3.png",
    tags: ["Python", "Flask", "Pandas", "NumPy", "Apriori", "ROR"],
    githubUrl: "https://github.com/ayinam-alekhya/FDA-DDI-index-calculation",
  },
  {
    id: 4,
    title: "Detection of Pneumonia & Tuberculosis (ResNet50 + Flask)",
    description:
      "Multiclass Chest X-ray classifier (Normal/Pneumonia/TB) using ResNet50. Simple Flask front-end for image upload and real-time predictions.",
    image: "/projects/project4.png",
    tags: ["TensorFlow", "Keras", "Flask", "Deep Learning", "ResNet50", "CV"],
    githubUrl: "https://github.com/ayinam-alekhya/Detection-Pneumonia-Tuberculosis",
  },
  {
    id: 5,
    title: "RentPal – Property Rental Management System",
    description:
      "Full-stack Java project with Spring Boot backend (REST APIs) and JavaFX frontend. Enables owners and tenants to manage properties, payments, and complaints via modern UI.",
    image: "/projects/project5.png",
    tags: ["Java", "Spring Boot", "JavaFX", "SQLite", "REST API", "Gradle", "Maven"],
    githubUrl: "https://github.com/ayinam-alekhya/Rentpal",
  },
];

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-border bg-card/40 px-3 py-1 text-[11px] font-medium text-foreground/80 transition-colors duration-200 hover:bg-primary/10 hover:text-primary">
    {children}
  </span>
);

const ProjectCard = ({ project }) => (
  <article className="group gradient-border rounded-lg overflow-hidden card-hover h-full flex flex-col">
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>

    <div className="p-6 flex flex-col text-left">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
        ))}
      </div>

      <h3 className="text-lg font-semibold tracking-tight mb-1">
        {project.title}
      </h3>

      <p className="text-sm text-foreground/70 mb-5">{project.description}</p>

      <div className="mt-auto flex items-center gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary text-primary hover:bg-primary/10 px-4 py-2 transition-colors duration-300 ml-auto"
          aria-label={`Open GitHub repo for ${project.title}`}
        >
          <Github className="h-4 w-4" />
          <span>Code</span>
        </a>
      </div>
    </div>
  </article>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Explore selected work across full-stack web apps, AI search, and analytics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ayinam-alekhya"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button w-fit mx-auto inline-flex items-center gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
