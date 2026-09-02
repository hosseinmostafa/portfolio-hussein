import React from "react";
import { useTheme } from "@heroui/use-theme";
import { Switch, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  // Initialize theme from localStorage or system preference
  React.useEffect(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Apply saved theme
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);
  
  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Tooltip 
        content={`Switch to ${isDark ? "light" : "dark"} mode`}
        placement="bottom"
      >
        <div className="flex items-center gap-2">
          <Icon 
            icon="lucide:sun" 
            className={`text-default-500 ${!isDark && "text-warning-500"}`} 
          />
          <Switch 
            isSelected={isDark}
            onValueChange={handleToggle}
            size="sm"
            color="primary"
            className="mx-1"
          />
          <Icon 
            icon="lucide:moon" 
            className={`text-default-500 ${isDark && "text-primary-500"}`} 
          />
        </div>
      </Tooltip>
    </motion.div>
  );
};