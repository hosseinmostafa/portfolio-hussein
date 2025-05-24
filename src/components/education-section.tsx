import React from "react";
import { Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  description: string;
  logo: string;
  delay: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  institution, degree, period, description, logo, delay 
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
                <h3 className="text-xl font-semibold">{degree}</h3>
                <span className="text-sm text-default-500">{period}</span>
              </div>
              <h4 className="text-default-600 font-medium mb-3">{institution}</h4>
              <p className="text-default-600 mb-2">{description}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

interface CertificationItemProps {
  name: string;
  issuer: string;
  date: string;
  progress: number;
  delay: number;
  src: string
}

const CertificationItem: React.FC<CertificationItemProps> = ({
  name, issuer, src, date, progress, delay
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className="section-transition"
    >
      <Card className="bg-content1/80 backdrop-blur-md mb-4">
        <CardBody className="p-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{name}</h3>
              <span className="text-xs text-default-500">{date}</span>
            </div>
            <p className="text-sm text-default-600">{issuer}</p>
            <a href={src} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 hover:underline">View Certificate</a>
            <Progress 
              value={progress} 
              color="primary" 
              size="sm" 
              aria-label="Certification progress" 
              className="mt-2"
            />
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export const EducationSection = () => {
  const education = [
    {
      institution: "E-G Academy of Computers and Information and Technology Management - Tanta",
      degree: "Bachelor's Degree",
      period: "2022 - 2025",
      logo: "lucide:graduation-cap",
      description: "Studying Computer Science and Information Technology with focus on web development and software engineering."
    }
  ];

  const certifications = [
    {
      name: "Frontend Development with Angular",
      issuer: "Digital Egypt Pioneers Initiative - DEPI",
      date: "2024",
      progress: 100,
      src: "./files/Alhussein Mostafa Abdelrahman Mohamed 1.pdf"
    },
    {
      name: "Frontend Development with React",
      issuer: "Hackerrank",
      date: "2025",
      progress: 100,
      src: "./files/frontend_developer_react certificate 7.pdf"
    },
    {
      name: "AWS",
      issuer: "National Telecommunication Institute - NTI",
      date: "2025",
      progress: 100,
      src: "./files/Alhussein-Mostafa Abdulrahman AWS 3.pdf"
    },
    {
      name: "JavaScript Intermediate",
      issuer: "SoloLearn",
      date: "2025",
      progress: 100,
      src: "./files/Alhusseint javaScript 5.pdf"
    },
    {
      name: "CSS (Basic)",
      issuer: "Hackerrank",
      date: "2025",
      progress: 100,
      src: "./files/css certificate 6.pdf"
    },
    
    {
      name: "JavaScript Intermediate",
      issuer: "Hackerrank",
      date: "2025",
      progress: 100,
      src: "./files/javascript_intermediate certificate 8.pdf"
    },
    {
      name: "Problem Solving (Basic)",
      issuer: "Hackerrank",
      date: "2025",
      progress: 100,
      src: "./files/problem_solving_basic certificate 9.pdf"
    },
    {
      name: "Problem Solving (Intermediate)",
      issuer: "Hackerrank",
      date: "2025",
      progress: 100,
      src: "./files/problem_solving_intermediate certificate 10.pdf"
    },
    {
      name: "Python (Basic)",
      issuer: "Hackerrank",
      date: "2025",
      progress: 100,
      src: "./files/python_basic certificate 11.pdf"
    },
    {
      name: "UX Design Fundamentals",
      issuer: "Information Technology Institute - ITI",
      date: "2024",
      progress: 100,
      src: "./files/Al-Hussein-Mostafa-UI 4.pdf"
    },
    {
      name: "Business English Track",
      issuer: "Berlitz Egypt",
      date: "2024",
      progress: 100,
      src: "./files/Al-Hussein Mustafa Abdul Rahman 2.pdf"
    }
  ];


  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-2xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Education & Certifications
      </motion.h2>

      {/* Education Section */}
      <motion.h3
        className="text-xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Education
      </motion.h3>
      <div className="space-y-6 mb-12">
        {education.map((edu, index) => (
          <EducationItem
            key={index}
            institution={edu.institution}
            degree={edu.degree}
            period={edu.period}
            description={edu.description}
            logo={edu.logo}
            delay={0.2 + index * 0.1}
          />
        ))}
      </div>

      {/* Certifications Section */}
      <motion.h3
        className="text-xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Certifications
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <CertificationItem
            key={index}
            name={cert.name}
            issuer={cert.issuer}
            date={cert.date}
            src={cert.src}
            progress={cert.progress}
            delay={0.2 + index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};