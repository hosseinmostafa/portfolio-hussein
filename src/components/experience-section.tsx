import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  description: string[];
  logo: string;
  delay: number;
  src?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company, position, period, description, logo, delay, src
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

              {src && (
                <div className="mt-4">
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <Icon icon="mdi:certificate-outline" width={20} height={20} />
                    View Certificate
                  </a>
                </div>
              )}
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
      company: "Software Engineering Future - SEF Academy",
      position: "Back End Developer - Internship",
      period: "Aug 2025",
      logo: "logos:nodejs-icon",
      description: [],
      // src: "https://drive.google.com/file/d/10DLSzjUAJTSOgaqYUPhT6G-DJRrfMCP9/view?usp=sharing"
    },
    {
      company: "Udacity",
      position: "Introducing Generative AI with AWS - Internship",
      period: "May 2025 - Jul 2025 · 3 mos",
      logo: "logos:udacity-icon",
      description: [
        "Currently enrolled in the 'Introducing Generative AI with AWS' program by Udacity.",
        "This hands-on course focuses on the foundational principles of generative AI and its applications using AWS tools and services such as Amazon SageMaker, Bedrock, and AWS Lambda.",
        "Key activities include:",
        "- Exploring the basics of generative AI and responsible AI development.",
        "- Building and deploying generative AI models on AWS.",
        "- Gaining practical experience through real-world labs and projects.",
        "This experience is enhancing my understanding of AI/ML concepts and how to integrate them with scalable cloud solutions, adding value to my web development and fullstack capabilities."
      ],
      src: "https://drive.google.com/file/d/10DLSzjUAJTSOgaqYUPhT6G-DJRrfMCP9/view?usp=sharing"
    },
    {
      company: "Google Developer Groups on Campus - GGV",
      position: "Introducing Web Developer - Internship",
      period: "Feb 2025 - Jun 2025 · 5 mos",
      logo: "logos:google-icon",
      description: [],
      src: "https://drive.google.com/file/d/1aKP1wu57Rz6DbTYBwB9ccFpegcraoFY7/view?usp=drive_link"
    },
    {
      company: "Digital Egypt Pioneers Initiative - DEPI",
      position: "Frontend Developer - Internship",
      period: "May 2024 - Oct 2024 · 6 mos",
      logo: "logos:angular-icon",
      description: [
        "Digital Egypt Pioneers Initiative - DEPI of the Ministry of Communications and Information Technology, Egypt under the supervision of the company Next Academy",
        "Developed responsive web applications using Angular framework",
        "Collaborated with team members to implement UI/UX designs",
        "Worked on improving application performance and user experience"
      ],
      src: "https://drive.google.com/file/d/1vB4vEkruPfJjCKW1ZtitTXafrfYnqOSc/view?usp=drive_link"
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
            src={exp.src}
          />
        ))}
      </div>
    </div>
  );
};
