import React, { useRef } from "react";
import { ChevronRight, X } from "lucide-react";


interface AchievementCardProps {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  teamMembers: {
    name: string;
    image: string;
  }[];
  isExpanded?: boolean;
  onExpand?: () => void;
}

export default function AchievementCard({
  title,
  description,
  date,
  imageSrc,
  teamMembers,
  isExpanded,
  onExpand,
}: AchievementCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Function to get random colorful border
  const getBorderColor = () => {
    const colors = [
      'bg-gradient-to-br from-blue-400 to-blue-600',
      'bg-gradient-to-br from-red-400 to-red-600', 
      'bg-gradient-to-br from-yellow-400 to-yellow-600',
      'bg-gradient-to-br from-green-400 to-green-600',
      'bg-gradient-to-br from-purple-400 to-purple-600',
      'bg-gradient-to-br from-pink-400 to-pink-600',
      'bg-gradient-to-br from-indigo-400 to-indigo-600',
      'bg-gradient-to-br from-orange-400 to-orange-600',
    ];
    
    // Use title length to consistently assign colors
    const colorIndex = title.length % colors.length;
    return colors[colorIndex];
  };


  return (
    <div 
  className={`transform-gpu transition-all duration-500 cursor-pointer ${
    isExpanded 
      ? "fixed inset-0 flex items-center justify-center z-[100] bg-black/50 backdrop-blur-sm" 
      : "w-full h-full"
  }`}
>
      <div 
        className={`transition-all duration-500 ${
          isExpanded 
            ? "w-[90vw] sm:w-[70vw] max-w-[900px] h-[85vh] max-h-[600px]" 
            : "w-full h-full"
        }`}
      >
        {/* Main Card */}
        {!isExpanded && (
          <div className="relative w-full h-full group cursor-pointer" onClick={onExpand}>
            {/* Colorful Border Frame */}
            <div className={`absolute inset-0 rounded-2xl p-3 shadow-2xl transition-all duration-300 group-hover:shadow-3xl ${getBorderColor()}`}>
              {/* Card Background */}
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-xl">
                
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  {/* Date Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1.5 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full text-xs text-gray-700 dark:text-gray-200 shadow-md border border-white/50 dark:border-gray-700/50 tracking-tighter">
                      {date}
                    </span>
                  </div>
                  
                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border border-white/50 dark:border-gray-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-5 bg-white dark:bg-gray-800">
                  <h4 className="text-md font-bold text-gray-800 dark:text-gray-100 mb-2 leading-tight line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 tracking-tighter">
                    {title}
                  </h4>
                  
                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed tracking-tight">
                    {description}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        )}

        {isExpanded && (
  <div className="w-full h-full max-h-screen relative rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
    <div className="flex flex-col sm:flex-row w-full h-full">
      {/* Left Panel */}
      <div className="w-full sm:w-1/2 h-1/2 sm:h-full border-b sm:border-b-0 sm:border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div 
          ref={contentRef} 
          className="w-full h-full overflow-auto custom-scrollbar"
        >
          {/* Content Sections */}
          <div className="p-6 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
            <div className="mb-4">
              <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 shadow-sm">
                {date}
              </span>
            </div>
            <h4 className="text-2xl font-bold bg-gradient-to-br from-gray-800 to-gray-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-3">
              {title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Team Members */}
          <div className="p-6">
            <h5 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <span className="w-6 h-0.5 bg-blue-300 dark:bg-blue-600 mr-3"></span>
              Team Members
            </h5>
            <div className="grid grid-cols-2 gap-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="group/member relative bg-gradient-to-br from-white to-slate-100 dark:from-gray-700 dark:to-gray-800 p-3 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-600">
                  <div className="relative w-12 h-12 mb-2 mx-auto rounded-full overflow-hidden ring-2 ring-blue-200 dark:ring-blue-700 ring-offset-2 ring-offset-white dark:ring-offset-gray-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                       e.currentTarget.src = '/default-avatar.png';
                     }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/member:scale-110"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-semibold text-gray-800 dark:text-gray-100">{member.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Right Panel - Static Image */}
<div className="w-full sm:w-1/2 h-64 sm:h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 p-4 sm:p-6">
  <img 
    src={imageSrc} 
    alt={title} 
    className="w-full max-h-full object-contain rounded-xl shadow-md"
  />
      </div>
    </div>

    {/* Close Button */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        onExpand?.();
      }}
      className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-600 shadow-lg transition-all hover:scale-110 border border-gray-200 dark:border-gray-600"
    >
      <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
    </button>
  </div>
)}
</div>


      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(229, 231, 235, 0.5);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(107, 114, 128, 0.4);
          border-radius: 3px;
          transition: all 0.3s;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(75, 85, 99, 0.6);
        }
        
        @media (prefers-color-scheme: dark) {
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(75, 85, 99, 0.3);
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(156, 163, 175, 0.4);
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(156, 163, 175, 0.6);
          }
        }
      `}</style>
    </div>
  );
}