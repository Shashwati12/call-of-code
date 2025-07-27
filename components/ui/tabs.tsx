"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  contentClassName,
  onTabChange,
}: {
  tabs: Tab[];
  containerClassName?: string;
  contentClassName?: string;
  onTabChange?: (index: number) => void;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx: number) => {
    if (idx < 0 || idx >= propTabs.length) return;
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
    onTabChange?.(idx);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-row whitespace-nowrap overflow-x-auto space-x-3 sm:space-x-8 scrollbar-hide",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.value}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="relative pb-2 sm:text-sm md:text-md font-semibold text-white transition-colors"
          >
            <span
              className={cn(
                "relative z-10 font-bold transition",
                active.value === tab.value
                  ? "bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                  : "text-black/50 dark:text-white/30 hover:text-black dark:hover:text-white"
              )}
            >
              {tab.title}
            </span>

            {active.value === tab.value && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-purple-400 to-pink-600"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>

      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-10 sm:mt-14 md:mt-16", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  active,
  hovering,
}: {
  className?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[520px] md:min-h-[600px]">
      
      {tabs.map((tab, idx) => {
        const isCurrent = tab.value === active.value;
        const showOnHover = hovering || isCurrent;

        return (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.05,
              top: hovering ? idx * -50 : 0,
              zIndex: hovering ? 10 - idx : tabs.length - idx,
opacity: showOnHover ? 1 - (idx * 0.1) : 0.5,
pointerEvents: showOnHover ? "auto" : "none",
            }}
            animate={{
              y: isCurrent ? [0, 20, 0] : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={cn(
              "w-full min-h-[400px] sm:min-h-[520px] md:min-h-[600px] absolute left-0 rounded-3xl border-[6px] border-purple-500 dark:border-pink-600 bg-white dark:bg-black shadow-xl duration-300",
              className
            )}
          >
            {tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};
