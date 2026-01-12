import { Github, ExternalLink } from "lucide-react";
import portfolioImg from "../assets/portfolio.png";
import authImg from "../assets/auth.png";
import dashboardImg from "../assets/dashboard.png";

const projects = [
  {
    title: "Portfolio Website",
    tech: "React, Tailwind",
    desc: "Personal portfolio showcasing skills and projects.",
    image: portfolioImg,
    github: "https://github.com/sagar-mahto/portfolio",
    live: "https://sagar-mahto.github.io/portfolio/",
  },
  {
    title: "Authentication System",
    tech: "Node.js, MongoDB",
    desc: "Secure login & signup system with JWT authentication.",
    image: authImg,
    github: "https://github.com/sagar-mahto/auth-system",
    live: "",
  },
  {
    title: "Dashboard App",
    tech: "React, REST APIs",
    desc: "Admin dashboard with charts and analytics.",
    image: dashboardImg,
    github: "https://github.com/sagar-mahto/dashboard-app",
    live: "",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen pt-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-xl shadow overflow-hidden cursor-pointer hover:shadow-2xl transition"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-44 w-full object-cover transition duration-300 group-hover:blur-sm"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-3 rounded-full hover:scale-110 transition"
                >
                  <Github size={18} />
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white p-3 rounded-full hover:scale-110 transition"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-indigo-600 mb-2">
                  {project.tech}
                </p>
                <p className="text-sm text-slate-600">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
