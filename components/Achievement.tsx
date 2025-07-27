"use client";
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import AchievementCard from "./ui/achievement-card"
import Particles from "./ui/particles";
import { useTheme } from "./ui/theme-provider";
import Image from "next/image";

const achievements = [
  {
    title: "Winner of Hunar Intern Web Development Hackathon",
    description: "Developed the award-winning healthcare website, WellnessWave.",
    date: "August 2024",
    imageSrc: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    teamMembers: [
      { name: "John Doe", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Jane Smith", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Vansh", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150" },
    ],
  },
  {
    title: "BITS Pilani Postman API Hackathon 3.0",
    description: "First Runner Up Team",
    date: "November 2023",
    imageSrc: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    teamMembers: [
      { name: "John Doe", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Jane Smith", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Mike Johnson", image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150" },
    ],
  },
  {
    title: "Google Developer Student Club Hackathon",
    description: "Best UI/UX Design Award",
    date: "September 2023",
    imageSrc: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    teamMembers: [
      { name: "Alice Brown", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Bob Wilson", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Carol Davis", image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150" },
    ],
  },
  {
    title: "Microsoft Imagine Cup Regional Finals",
    description: "Top 10 Finalist",
    date: "March 2023",
    imageSrc: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=800",
    teamMembers: [
      { name: "David Lee", image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Emma Taylor", image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Frank Miller", image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150" },
    ],
  },
  {
    title: "IEEE Student Branch Innovation Challenge",
    description: "Winner - Technical Excellence",
    date: "January 2023",
    imageSrc: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800",
    teamMembers: [
      { name: "Grace Chen", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Henry Kim", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150" },
    ],
  },
  {
    title: "Open Source Contribution Award",
    description: "GitHub Campus Expert Recognition",
    date: "December 2022",
    imageSrc: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
    teamMembers: [
      { name: "Ivy Rodriguez", image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Jack Thompson", image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Kate Anderson", image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150" },
    ],
  },
  {
    title: "National Coding Championship",
    description: "Second Place Winner",
    date: "October 2022",
    imageSrc: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
    teamMembers: [
      { name: "Alex Johnson", image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Sarah Wilson", image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150" },
    ],
  },
  {
    title: "AWS Cloud Computing Certification",
    description: "Solutions Architect Associate",
    date: "July 2022",
    imageSrc: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
    teamMembers: [
      { name: "Individual Achievement", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" },
    ],
  },
  {
    title: "University Programming Contest",
    description: "First Place Team",
    date: "April 2022",
    imageSrc: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
    teamMembers: [
      { name: "Tom Brown", image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Lisa Davis", image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { name: "Mark Taylor", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150" },
    ],
  },
  {
  title: "AI For Social Good Challenge",
  description: "Finalist in AI for Social Impact competition",
  date: "June 2022",
  imageSrc: "https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=800",
  teamMembers: [
    { name: "Mia Allen", image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150" },
    { name: "Leo Walker", image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150" }
  ],
},
{
  title: "TechStars Startup Bootcamp",
  description: "Top Pitch Award for EdTech Idea",
  date: "May 2022",
  imageSrc: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=800",
  teamMembers: [
    { name: "Ella Green", image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150" },
    { name: "Ryan Scott", image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150" }
  ],
},
{
  title: "Hack4Climate Global Hackathon",
  description: "Best Sustainable Tech Solution",
  date: "February 2022",
  imageSrc: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
  teamMembers: [
    { name: "Nina Parker", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" },
    { name: "Oscar Brooks", image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150" }
  ],
},
{
  title: "Facebook Developer Circle Hackathon",
  description: "People's Choice Award",
  date: "December 2021",
  imageSrc: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
  teamMembers: [
    { name: "Isabella Torres", image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150" },
    { name: "Liam Bennett", image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150" }
  ],
},
{
  title: "National Robotics Challenge",
  description: "Semi-Finalist Team",
  date: "August 2021",
  imageSrc: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800",
  teamMembers: [
    { name: "Sophie Young", image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" },
    { name: "Daniel Reed", image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150" }
  ],
},
{
  title: "Youth Innovation Forum",
  description: "Innovation Grant Recipient",
  date: "June 2021",
  imageSrc: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
  teamMembers: [
    { name: "Mason Clark", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" }
  ],
}
]

// Predefined positions and rotations for scattered layout - these will repeat cyclically
const cardPositions = [
  // Row 1
  { x: '4%', y: '2%', rotation: -7, zIndex: 5 },
  { x: '35%', y: '4%', rotation: 5, zIndex: 7 },
  { x: '65%', y: '1%', rotation: -6, zIndex: 6 },

  // Row 2
  { x: '6%', y: '23%', rotation: 6, zIndex: 5 },
  { x: '35%', y: '25%', rotation: -4, zIndex: 6 },
  { x: '65%', y: '23%', rotation: 3, zIndex: 4 },

  // Row 3
  { x: '6%', y: '45%', rotation: -3, zIndex: 5 },
  { x: '35%', y: '50%', rotation: 2, zIndex: 4 },
  { x: '65%', y: '45%', rotation: -5, zIndex: 3 },

  // Row 4
  { x: '8%', y: '70%', rotation: 4, zIndex: 4 },
  { x: '38%', y: '69%', rotation: -2, zIndex: 5 },
  { x: '70%', y: '63%', rotation: 3, zIndex: 3 },

  // Row 5
  { x: '10%', y: '90%', rotation: -4, zIndex: 5 },
  { x: '40%', y: '90%', rotation: 4, zIndex: 4 },
  { x: '65%', y: '85%', rotation: -3, zIndex: 3 },
];

// Function to calculate dynamic container height based on number of achievements
const calculateContainerHeight = (totalCards: number, positionsPerCycle: number) => {
  const cycles = Math.ceil(totalCards / positionsPerCycle);
  return cycles * 300; // 300px per cycle to ensure proper spacing
};

export default function AchievementsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { theme } = useTheme();

  const handleCardExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const sortedAchievements = [...achievements].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime(); // Most recent first
});



  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black transition-colors duration-300 pb-40">
<div className="fixed inset-0 z-0 pointer-events-none">
  <Particles
    quantity={400}
    size={1.5}
    staticity={60}
    color={theme === "dark" ? "#ffffff" : "#000000"}
    className="w-full h-full"
  />
</div>


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


      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:30px_30px] dark:bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)]" />
      </div>

      <div className="relative z-10 px-4 py-10 sm:px-6 lg:px-16">
        <motion.h1
          className="text-3xl md:text-4xl text-center font-bold mb-12 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h1>

        {/* Progress Bar */}
          <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden mb-14">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-3/4 rounded-full animate-pulse" />
          </div>


{isMobile ? (
  (() => {
    const cardHeight = 26 * 16 + 120; // 26rem + 120px margin
    const totalHeight = sortedAchievements.length * cardHeight + 200;

    return (
      <div
        className="relative w-full max-w-md mx-auto overflow-visible pt-20 pb-40"
        style={{ minHeight: `${totalHeight}px` }}
      >
        {/* Curly Dotted Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 z-0 pointer-events-none overflow-hidden">
          <svg
            width="12"
            height="100%"
            viewBox="0 0 12 3000"
            preserveAspectRatio="none"
            className="h-full"
          >
            <path
  d={Array.from({ length: 20 }, (_, i) => {
    const y1 = i * 150;
    const y2 = y1 + 50;
    const y3 = y1 + 150;
    return `${i === 0 ? 'M6 0' : ''} C 12 ${y2}, 0 ${y2 + 50}, 6 ${y3}`;
  }).join(' ')}
              stroke={theme === 'dark' ? '#ffffff' : '#000000'}
              strokeDasharray="6,12"
              fill="transparent"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Achievement Cards */}
        <div className="relative z-10">
          {sortedAchievements.map((achievement, index) => {
            if (expandedIndex !== null && expandedIndex !== index) return null;
            const position = cardPositions[index % cardPositions.length];

            return (
              <motion.div
                key={index}
                className="relative w-80 md:w-96 h-[26rem] mx-auto"
                style={{
                  marginTop: index === 0 ? "0px" : "120px",
                  zIndex: expandedIndex === index ? 50 : position.zIndex,
                  transform:
                    expandedIndex === null
                      ? `rotate(${position.rotation}deg)`
                      : "rotate(0deg)",
                }}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: position.rotation + 20,
                }}
                animate={{
                  opacity:
                    expandedIndex !== null && expandedIndex !== index
                      ? 0.3
                      : 1,
                  scale: 1,
                  rotate: expandedIndex === null ? position.rotation : 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: expandedIndex === null ? 1.05 : 1,
                  rotate:
                    expandedIndex === null
                      ? position.rotation - 2
                      : 0,
                  zIndex: expandedIndex === null ? 10 : position.zIndex,
                  transition: { duration: 0.3 },
                }}
              >
                <AchievementCard
                  {...achievement}
                  isExpanded={expandedIndex === index}
                  onExpand={() => handleCardExpand(index)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  })()
) : (
  <div
  className="relative w-full max-w-7xl mx-auto" 
  style={{
    height: `${calculateContainerHeight(sortedAchievements.length, cardPositions.length)}vh`,
  }}
>
    {sortedAchievements.map((achievement, index) => {
      if (expandedIndex !== null && expandedIndex !== index) return null;
      // Calculate which cycle this card belongs to
      const cycleIndex = Math.floor(index / cardPositions.length);
      const positionIndex = index % cardPositions.length;
      const basePosition = cardPositions[positionIndex];
      
      // Adjust the Y position based on the cycle
      const adjustedPosition = {
        ...basePosition,
        y: `${parseFloat(basePosition.y) + (cycleIndex * 120)}%`, // Add 120% for each cycle
      };
      
      return (
        <motion.div
          key={index}
          className="absolute w-80 md:w-96 h-[26rem]"
          style={{
            left: adjustedPosition.x,
            top: adjustedPosition.y,
            zIndex: expandedIndex === index ? 50 : adjustedPosition.zIndex,
            transform:
              expandedIndex === null
                ? `rotate(${adjustedPosition.rotation}deg)`
                : "rotate(0deg)",
          }}
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: adjustedPosition.rotation + 20,
          }}
          animate={{
            opacity:
              expandedIndex !== null && expandedIndex !== index
                ? 0.3
                : 1,
            scale: 1,
            rotate: expandedIndex === null ? adjustedPosition.rotation : 0,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: expandedIndex === null ? 1.05 : 1,
            rotate:
              expandedIndex === null
                ? adjustedPosition.rotation - 2
                : 0,
            zIndex:
              expandedIndex === null ? 10 : adjustedPosition.zIndex,
            transition: { duration: 0.3 },
          }}
        >
          <AchievementCard
            {...achievement}
            isExpanded={expandedIndex === index}
            onExpand={() => handleCardExpand(index)}
          />
        </motion.div>
      );
    })}
  </div>
)}
      </div>
    </div>
  );
}