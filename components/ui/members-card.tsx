import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface MembersCardProps {
  name: string;
  imageSrc: string;
  githubLink: string;
  linkedinLink: string;
}

export default function MembersCard({
  name,
  imageSrc,
  githubLink,
  linkedinLink,
}: MembersCardProps) {
  return (
    <div className="w-full max-w-[200px] sm:max-w-[320px] mx-auto">
      {/* Desktop Card */}
      <div className="hidden sm:block group relative overflow-hidden rounded-2xl bg-white dark:bg-black shadow-md hover:shadow-[0_0_30px_5px_rgba(128,128,128,0.4)] transition-all duration-300 hover:-translate-y-1 border border-pink-500 dark:border-purple-500">
        {/* Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={imageSrc}
            alt={`Profile picture of ${name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Name + Socials */}
        <div className="p-4">
          <h3 className="font-semibold text-md text-center text-black dark:text-white mb-3 break-words">
            {name}
          </h3>

          <div className="flex justify-center space-x-4">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <Github size={18} className="text-black dark:text-white" />
            </a>

            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <Linkedin size={18} className="text-black dark:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block sm:hidden flex flex-col items-center gap-3 py-4">
        <img
          src={imageSrc}
          alt={`Profile picture of ${name}`}
          className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-pink-500 dark:border-purple-500"
        />
        <h3 className="text-center text-base font-semibold text-black dark:text-white px-4">
          {name}
        </h3>
        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Github size={18} className="text-black dark:text-white" />
          </a>

          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <Linkedin size={18} className="text-black dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
