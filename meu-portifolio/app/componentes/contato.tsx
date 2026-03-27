import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contato() {
  return (
    <footer className="bg-[#599636] bottom-0 left-0 w-full text-white p-5 shadow-md z-50">
      <div className="flex justify-center">
        <ul className="flex gap-10 text-3xl">
          <li>
            <a
              href="#"
              className="text-white hover:text-black transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-black transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-black transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
