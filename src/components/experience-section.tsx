import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  description: string[];
  logo: string;
  delay: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  company, position, period, description, logo, delay 
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="section-transition"
    >
      <Card className="bg-content1/80 backdrop-blur-md mb-6">
        <CardBody className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
              <div className="w-12 h-12 rounded-md bg-content2 flex items-center justify-center">
                <Icon icon={logo} width={28} height={28} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{position}</h3>
                <span className="text-sm text-default-500">{period}</span>
              </div>
              <h4 className="text-default-600 font-medium mb-3">{company}</h4>
              <ul className="list-disc pl-5 space-y-2">
                {description.map((item, index) => (
                  <li key={index} className="text-default-600">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Digital Egypt Pioneers Initiative - DEPI",
      position: "Frontend Developer",
      period: "May 2024 - Oct 2024 · 6 mos",
      logo: "logos:angular-icon",
      description: [
        "Digital Egypt Pioneers Initiative - DEPI of the Ministry of Communications and Information Technology, Egypt under the supervision of the company Next Academy",
        "Developed responsive web applications using Angular framework",
        "Collaborated with team members to implement UI/UX designs",
        "Worked on improving application performance and user experience"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2 
        className="text-2xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Work & Experience
      </motion.h2>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceItem 
            key={index}
            company={exp.company}
            position={exp.position}
            period={exp.period}
            description={exp.description}
            logo={exp.logo}
            delay={0.2 + index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};