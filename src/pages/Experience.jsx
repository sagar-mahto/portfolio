import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Self / Freelance",
    duration: "2024 – Present",
    description:
      "Building full-stack applications, REST APIs, managing databases, and deploying scalable solutions.",
  },
  {
    role: "Frontend Developer",
    company: "Projects & Practice",
    duration: "2023 – 2024",
    description:
      "Developed responsive UI components using React and Tailwind CSS.",
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen pt-28 bg-gradient-to-br from-indigo-50 via-white to-slate-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My professional journey and hands-on development experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-indigo-600 pl-8 space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="group relative bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* Dot */}
              <span className="absolute -left-[38px] top-6 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <Briefcase size={14} />
              </span>

              <h3 className="text-lg font-semibold">
                {exp.role}
              </h3>
              <p className="text-sm text-indigo-600 font-medium">
                {exp.company}
              </p>
              <p className="text-xs text-slate-500 mt-1 group-hover:text-indigo-600 transition">
                {exp.duration}
              </p>

              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
