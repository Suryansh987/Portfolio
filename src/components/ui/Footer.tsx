import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Suryansh</h2>
          <p className="text-gray-400">
            © 2024 Suryansh. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/suryansh987/"
            aria-label="LinkedIn"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Suryansh987"
            aria-label="GitHub"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/suryansh_._.sharma?igsh=YjFmYnE4NzlzamFp"
            aria-label="Instagram"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
