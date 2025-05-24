import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@heroui/use-theme";

export const AnimatedBackground = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 
        'bg-gradient-to-br from-background via-content2 to-background animated-gradient' : 
        'bg-gradient-to-br from-background via-content1 to-background animated-gradient'}`}>
        
        {/* Animated circles */}
        <motion.div
          className={`absolute w-[500px] h-[500px] rounded-full ${
            isDark ? "bg-primary-900/10" : "bg-primary-100/40"
          }`}
          style={{ top: "-250px", right: "-100px" }}
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          className={`absolute w-[300px] h-[300px] rounded-full ${
            isDark ? "bg-secondary-900/10" : "bg-secondary-100/30"
          }`}
          style={{ bottom: "-150px", left: "10%" }}
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          className={`absolute w-[200px] h-[200px] rounded-full ${
            isDark ? "bg-primary-800/10" : "bg-primary-200/20"
          }`}
          style={{ top: "30%", left: "-100px" }}
          animate={{
            x: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          className="absolute inset-0 backdrop-blur-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};