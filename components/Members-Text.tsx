"use client";

import { useState } from 'react';
import { Tabs } from './ui/tabs';
import MembersCard from './ui/members-card';
import Image from 'next/image';
import { motion } from "framer-motion";
import Particles from './ui/particles';
import { useTheme } from "@/components/ui/theme-provider";

const TabProgressBar = ({ index, total }: { index: number; total: number }) => {
  const barWidth = 100 / total;

  return (
    <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div className="relative w-full h-full">
        <motion.div
          className="absolute h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          initial={false}
          animate={{
            left: `${(index * barWidth)}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{
            width: `${barWidth}%`,
          }}
        />
      </div>
    </div>
  );
};


// Sample member data organized by categories
const foundersData = [
  {
    name: "John Doe (Founder)",
    imageSrc: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    githubLink: "https://github.com/johndoe",
    linkedinLink: "https://www.linkedin.com/in/johndoe/",
  },
  {
    name: "Jane Smith (Co-Founder)",
    imageSrc: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    githubLink: "https://github.com/janesmith",
    linkedinLink: "https://www.linkedin.com/in/janesmith/",
  },
];

const superSeniorsData = [
  {
    name: "Alex Johnson(Ex-President)",
    imageSrc: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
    githubLink: "https://github.com/alexjohnson",
    linkedinLink: "https://www.linkedin.com/in/alexjohnson/",
  },
  {
    name: "Sarah Wilson (Ex-VP)",
    imageSrc: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
    githubLink: "https://github.com/sarahwilson",
    linkedinLink: "https://www.linkedin.com/in/sarahwilson/",
  },
  {
    name: "Mike Brown (Ex-Secretary)",
    imageSrc: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
    githubLink: "https://github.com/mikebrown",
    linkedinLink: "https://www.linkedin.com/in/mikebrown/",
  },
];

const presentMembersData = [
  {
    name: "Sarvesh Shahane (President)",
    imageSrc: "/sarvesh.jpg",
    githubLink: "https://github.com/This-Is-My-GitHub-Account",
    linkedinLink: "https://www.linkedin.com/in/sarveshshahane/?originalSubdomain=in",
  },
  {
    name: "Vansh Waldeo (Vice President)",
    imageSrc: "/vansh.jpg",
    githubLink: "https://github.com/VanshKing30",
    linkedinLink: "https://www.linkedin.com/in/vansh-waldeo-81ab31285/",
  },
  {
    name: "Shivaji Raut (CP Head)",
    imageSrc: "/shivaji.jpg",
    githubLink: "https://github.com/shivaji43",
    linkedinLink: "https://www.linkedin.com/in/shivajiraut/",
  },
  {
    name: "Aditya Modak (Secretary)",
    imageSrc: "/modak.jpg",
    githubLink: "https://github.com/shivaji43",
    linkedinLink: "https://www.linkedin.com/in/aditya-modak-42a684250/",
  },
  {
    name: "Sanica Chorey (Secretary)",
    imageSrc: "/sanica.jpg",
    githubLink: "https://github.com/shivaji43",
    linkedinLink: "https://www.linkedin.com/in/swaraj-pawar-webdev/",
  },
  {
    name: "Swaraj Pawar",
    imageSrc: "/swaraj.jpg",
    githubLink: "https://github.com/Swaraj-23",
    linkedinLink: "https://www.linkedin.com/in/swaraj-pawar-webdev/",
  },
];

const MemberGrid = ({ members }: { members: typeof foundersData }) => {
  const isCompact = members.length < 4;

  return (
    <div className="relative bg-gradient-to-r from-[rgba(139,92,246,1)] to-[rgba(233,30,99,1)] rounded-2xl shadow-xl p-6 border border-gray-300 dark:border-gray-700 min-h-[820px]">
      {isCompact ? (
        <div className="flex justify-center gap-6 flex-wrap">
          {members.map((member, index) => (
            <div key={index} className="w-full sm:w-[300px]">
              <MembersCard
                name={member.name}
                imageSrc={member.imageSrc}
                githubLink={member.githubLink}
                linkedinLink={member.linkedinLink}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {members.map((member, index) => (
            <div key={index} className="w-full sm:w-[300px]">
              <MembersCard
                name={member.name}
                imageSrc={member.imageSrc}
                githubLink={member.githubLink}
                linkedinLink={member.linkedinLink}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function MembersPage() {

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const { theme } = useTheme();

  const tabs = [
    {
      title: "Present Members",
      value: "present",
      content: <MemberGrid members={presentMembersData} />,
    },
    {
      title: "Super Seniors",
      value: "seniors",
      content: <MemberGrid members={superSeniorsData} />,
    },
    {
      title: "Founders",
      value: "founders",
      content: <MemberGrid members={foundersData} />,
    },
  ];

  

  return (
    <div>
      <div className={`relative min-h-screen w-full ${theme === "dark" ? "bg-black" : "bg-white"}`}>
  <Particles
    quantity={500}
    color={theme === "dark" ? "#ffffff" : "#000000"}
    className="absolute inset-0 z-0"
    size={1}
    staticity={50}
    ease={40}
  />  
        {/* Content */}
        <div className="min-h-screen">
          {/* Header */}
          <header className="flex justify-center p-6">
  <Image
    src="/coc-logo.jpg"
    alt="COC Logo"
    width={80}
    height={80}
    className="rounded-md object-contain invert dark:invert-0"
  />
</header>

          {/* Main Section */}
          <main className="container mx-auto px-6 py-10 space-y-12">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-2xl">
  <Image
    src="/coc.jpg"
    width={800}
    height={400}
    alt="Members group photo"
    className="w-full h-64 sm:h-80 object-cover brightness-75"
  />
  <div className="absolute inset-0 flex bg-black/10 items-center justify-center">
    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wider text-white drop-shadow-lg mt-24 sm:mt-32">
      MEMBERS
    </h1>
  </div>
</div>


            {/* Progress Bar */}
            <TabProgressBar index={activeTabIndex} total={tabs.length} />

            {/* Tabs Section */}
            <div className="relative z-10 min-h-[700px] overflow-visible px-4 sm:px-6">
  <Tabs
    tabs={tabs}
    containerClassName="mb-8"
    contentClassName="mt-16"
    onTabChange={(idx) => setActiveTabIndex(idx)}
  />
</div>
          </main>
        </div>
      </div>
    </div>
  );
}