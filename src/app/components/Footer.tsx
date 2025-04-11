import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black w-full px-6 py-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
        <h1 className="font-mono text-stone-300 text-center md:text-left">
          Desenvolvido por Rodrigo Bispo.
        </h1>

        <div className="flex gap-6 justify-center md:justify-start">
          <a
            href="https://github.com/rodrigog10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-stone-400 transition duration-300 hover:text-gray-500"
              size={30}
            />
          </a>
          <a
            href="https://www.instagram.com/rodrigobisppo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-stone-400 transition duration-300 hover:text-pink-500"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/rodrigo-bispo-7854a9324/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-stone-400 transition duration-300 hover:text-blue-500"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
