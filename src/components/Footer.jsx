import { Github, Linkedin, FileText } from "lucide-react";
import resume from './../assets/resume.pdf';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Social + Resume Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/sagar-mahto"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>

          <a
            href="https://linkedin.com/in/sagar-mahto"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="Resume"
          >
            <FileText size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Sagar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
