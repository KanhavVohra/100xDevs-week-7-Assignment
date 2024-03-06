import React from 'react';
import linkedinIcon from '../assets/icons8-linkedin.svg';
import githubIcon from '../assets/icons8-github.svg';

export const Footer = () => {
  return (
    <footer className="p-4 text-center border-t border-gray-500">
      <div className="flex justify-end">
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:text-gray-400"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 hover:text-gray-400"
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-6 h-6"
          />
        </a>
      </div>
    </footer>
  );
};
