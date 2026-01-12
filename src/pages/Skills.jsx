import {
  Code2,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    icon: <Code2 size={28} />,
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={28} />,
    items: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Database",
    icon: <Database size={28} />,
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: <Wrench size={28} />,
    items: ["Git & GitHub", "Postman", "Vite", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen pt-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable and reliable
            applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group bg-slate-800/80 rounded-2xl p-6 border border-slate-700 hover:border-indigo-500 hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 mb-4 group-hover:scale-110 transition">
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">
                {skill.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2 text-sm text-slate-300">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                    {item}
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

export default Skills;
