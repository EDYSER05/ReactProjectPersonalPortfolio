import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <p className="text-blue-800 font-semibold">
            DigitalEvolution S.A
          </p>

          <div className="flex space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600">
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
              <FaGithub size={32} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}