import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const roles = ["Frontend", "Backend", "Full Stack"];

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typing = setTimeout(() => {
      setText(roles[roleIndex].slice(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex === roles[roleIndex].length) {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1200);
      }
    }, 120);

    return () => clearTimeout(typing);
  }, [charIndex, roleIndex]);

  return (
    <section className="min-h-screen pt-28 bg-gradient-to-br from-indigo-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div>
          <p className="uppercase tracking-widest text-sm text-indigo-600 mb-4">
            Full Stack Developer
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Hi, I’m <span className="text-indigo-600">Sagar</span>
            <br />
            <span className="text-slate-700">
              {text}
            </span>{" "}
            Developer
          </h1>

          <p className="text-slate-600 max-w-xl mb-8">
            I build modern user interfaces, scalable backend systems,
            and manage databases with clean, efficient code.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              View Projects <ArrowRight size={18} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-slate-400 px-6 py-3 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-indigo-300 blur-3xl opacity-30">

            </div>
            <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 ">
              <img
                src="/images/img5.jpeg"   // replace with your image
                alt="Profile"
                className="w-full h-full opacity-90 object-cover object-top rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>

        

      </div>
      
    </section>
  );
};

export default Home;
