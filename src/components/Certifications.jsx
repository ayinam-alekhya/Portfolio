import { ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    description:
      "Validated foundational knowledge of AWS Cloud concepts, core services, billing, pricing, and security. Demonstrated ability to explain and navigate key AWS offerings effectively.",
    image: "/certifications/aws.png", 
    link: "/certifications/aws.pdf", 
  },
  {
    id: 2,
    title: "Google Data Analytics Certificate",
    description:
      "Completed Google's professional data analytics program — covered data cleaning, analysis, and visualization using SQL, R, and Tableau to generate insights and business recommendations.",
    image: "/certifications/google-data.png", 
    link: "/certifications/google-data.pdf", 
  },
  {
    id: 3,
    title: "Data Structures & Algorithms Certification",
    description:
      "Focused on algorithmic problem-solving, complexity analysis, and core data structures — arrays, trees, graphs, stacks, queues, and dynamic programming for technical interviews.",
    image: "/certifications/dsa.png", 
    link: "/certifications/dsa.pdf", 
  },
];

export const Certification = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Certifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Recognitions and credentials that showcase my technical foundation and continuous learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover gradient-border"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.description}
                </p>

                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline"
                  >
                    View Certificate <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="text-foreground/60 text-sm italic">
                    Link
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
