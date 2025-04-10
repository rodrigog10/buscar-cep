import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col items-start justify-center bg-black w-full px-10 py-6">
      <h1 className="font-mono text-stone-300  mb-4">
        Desenvolvido por Rodrigo Bispo.
      </h1>

      <div className="flex gap-6">
        <a
          href="https://github.com/rodrigog10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="text-stone-400 transition duration-300 hover:text-gray-500"
            size={35}
          />
        </a>
        <a
          href="https://www.instagram.com/rodrigobisppo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            className="text-stone-400 transition duration-300 hover:text-pink-500"
            size={35}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigo-bispo-7854a9324/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="text-stone-400 transition duration-300 hover:text-blue-500"
            size={35}
          />
        </a>
      </div>
    </div>
  );
}
