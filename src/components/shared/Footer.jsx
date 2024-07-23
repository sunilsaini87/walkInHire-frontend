import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-100 py-8 md:py-12 mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between space-y-6 md:space-y-0 md:flex-row">
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 text-center md:text-left">
          <a href="/contact" className="text-gray-700 hover:text-gray-900">
            About Us
          </a>
          <a href="#jobs" className="text-gray-700 hover:text-gray-900">
            Job Listings
          </a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
          <a href="/#faq" className="text-gray-700 hover:text-gray-900">
            FAQs
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaGithub className="h-6 w-6 sm:h-5 sm:w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaTwitter className="h-6 w-6 sm:h-5 sm:w-5" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaDiscord className="h-6 w-6 sm:h-5 sm:w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaLinkedin className="h-6 w-6 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
      <hr className="my-4 border-gray-200 dark:border-gray-700 w-full" />
      <div className="text-center text-gray-600 mt-4">
        &copy; WalkInHire 2024, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
