import { Braces } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black w-full px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
        {/* Texto "Desenvolvido por" - agora perfeitamente centralizado */}
        <div className="flex items-center gap-2">
          <span className="text-stone-300">Desenvolvido por</span>
          <span className="text-cyan-300 drop-shadow-[0_0_8px_cyan]">
            Rodrigo Bispo
          </span>
          <Braces className="text-stone-300" size={20} />
        </div>

        {/* Redes sociais em coluna */}
        <div className="flex rounded-md drop-shadow-[0_0_30px_white] items-center md:items-end gap-3">
          
          <div className="flex gap-4">
            <a
              href="https://github.com/rodrigog10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="text-stone-400 hover:text-gray-500 transition duration-300"
                size={30}
              />
            </a>
            <a
              href="mailto:rodrigobisppo123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGmail
                className="text-stone-400 hover:text-red-400 transition duration-300"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigo-bispo-7854a9324/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="text-stone-400 hover:text-blue-500 transition duration-300"
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com/rodrigobisppo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="text-stone-400 hover:text-pink-500 transition duration-300"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
