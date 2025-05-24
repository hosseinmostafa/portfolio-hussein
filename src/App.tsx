import React from "react";
import { useTheme } from "@heroui/use-theme";
import { Tabs, Tab, Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { EducationSection } from "./components/education-section";
import { ProjectsSection } from "./components/projects-section";
import { ContactSection } from "./components/contact-section";
import { AnimatedBackground } from "./components/animated-background";
import { ThemeSwitcher } from "./components/theme-switcher";

export default function App() {
  const [activeTab, setActiveTab] = React.useState("about");
  const { theme } = useTheme();
  
  // Add useEffect to apply theme class to document
  React.useEffect(() => {
    // Apply theme class to document element instead of a div
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      
      <Navbar 
        maxWidth="xl" 
        className="bg-background/70 backdrop-blur-md border-b border-divider"
        isBordered
      >
        <NavbarBrand>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            Alhussein's
          </motion.div>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem className="hidden sm:flex">
            <Button 
              as={Link} 
              color="primary" 
              href="#contact" 
              variant="flat"
              onPress={() => setActiveTab("contact")}
              endContent={<Icon icon="lucide:mail" />}
            >
              Contact Me
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 overflow-x-auto"
        >
          <Tabs 
            aria-label="Portfolio sections" 
            color="primary"
            variant="underlined"
            selectedKey={activeTab} 
            onSelectionChange={setActiveTab as any}
            className="justify-center min-w-full"
          >
            <Tab key="about" title={
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Icon icon="lucide:user" />
                <span className="hidden sm:inline">About</span>
              </div>
            } />
            <Tab key="experience" title={
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Icon icon="lucide:briefcase" />
                <span className="hidden sm:inline">Experience</span>
              </div>
            } />
            <Tab key="education" title={
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Icon icon="lucide:graduation-cap" />
                <span className="hidden sm:inline">Education</span>
              </div>
            } />
            <Tab key="projects" title={
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Icon icon="lucide:folder" />
                <span className="hidden sm:inline">Projects</span>
              </div>
            } />
            <Tab key="contact" title={
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Icon icon="lucide:mail" />
                <span className="hidden sm:inline">Contact</span>
              </div>
            } />
          </Tabs>
        </motion.div>
        
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="py-4"
        >
          {activeTab === "about" && <AboutSection />}
          {activeTab === "experience" && <ExperienceSection />}
          {activeTab === "education" && <EducationSection />}
          {activeTab === "projects" && <ProjectsSection />}
          {activeTab === "contact" && <ContactSection />}
        </motion.div>
      </div>
    </div>
  );
}