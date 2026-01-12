import img5 from "../assets/img5.jpeg";

const About = () => {
  return (
    <section className="min-h-screen pt-28 bg-gradient-to-br from-indigo-50 via-white to-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Passionate Full Stack Developer focused on building scalable,
            clean, and efficient web applications.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-indigo-300 blur-2xl opacity-30"></div>

              {/* Image Circle */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={img5}   // replace with your image
                  alt="Profile"
                  className="w-full h-full opacity-90 object-top object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Hi, I’m <span className="text-indigo-600">Sagar</span>
            </h3>

            <p className="text-slate-600 leading-relaxed mb-4">
              I am a Full Stack Developer with strong skills in frontend,
              backend development, and database management. I enjoy
              transforming ideas into reliable digital solutions.
            </p>

            <p className="text-slate-600 leading-relaxed mb-6">
              My experience includes building REST APIs, managing databases,
              and designing modern, responsive user interfaces using React
              and Tailwind CSS.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Frontend Development",
                "Backend APIs",
                "Database Management",
                "Clean Code Practices",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow hover:shadow-md transition"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
