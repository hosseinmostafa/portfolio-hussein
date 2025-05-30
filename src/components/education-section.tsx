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
      src: "https://drive.google.com/file/d/1vB4vEkruPfJjCKW1ZtitTXafrfYnqOSc/view?usp=drive_link"
    },
    {
      name: "Frontend Development with React",
      issuer: "Hackerrank",
      date: "2025",
      progress: 100,
      src: "https://drive.google.com/file/d/1DthMPYUgNbiu_uuaCufV6s3WcT2SBk5z/view?usp=drive_link"
    },
    {
      name: "AWS",
      issuer: "National Telecommunication Institute - NTI",
      date: "2025",
      progress: 100,
      src: "https://drive.google.com/file/d/1YBiHOmKmdh_kcFFG-x4xwVb13geJFA9T/view?usp=drive_link"
    },
    {
      name: "JavaScript Intermediate",
      issuer: "SoloLearn",
      date: "2025",
      progress: 100,
      src: "https://drive.google.com/file/d/1zXsv2l_ehL7vGFHTov-PHRneMQJUARO5/view?usp=drive_link"
    },
    {
      name: "Angular",
      issuer: "SoloLearn",
      date: "2025",
      progress: 100,
      src: "https://drive.google.com/file/d/18PfClDY2dF3zBIH5z8vS7YGAJ4Nq3Gs8/view?usp=drive_link"
    },
    {
      name: "CSS (Basic)",
      issuer: "Hackerrank",
      date: "2025",
      progress: 100,
      src: "https://drive.google.com/file/d/1vblJbEoXP98-_OexDZJ097WsZY8Pi_XM/view?usp=drive_link"
    },
    
    {
      name: "JavaScript Intermediate",
      issuer: "Hackerrank",
      date: "2025",
      progress: 100,
      src: "https://drive.google.com/file/d/1gBhO-DP7q0bbxlRyu3GI9JlJqPLRaLw4/view?usp=drive_link"
    },
    {
      name: "Problem Solving (Basic)",
      issuer: "Hackerrank",
      date: "2025",
      progress: 100,
      src: "https://drive.google.com/file/d/1npGP-AL0vIG0F-okT9w-twQDDZlVKKDP/view?usp=drive_link"
    },
    {
      name: "Problem Solving (Intermediate)",
      issuer: "Hackerrank",
      date: "2025",
      progress: 70,
      src: "https://drive.google.com/file/d/1hL1RvJL2ecmjgY7v2aG8gpBlUf0uaeTN/view?usp=drive_link"
    },
    {
      name: "Python (Basic)",
      issuer: "Hackerrank",
      date: "2025",
      progress: 50,
      src: "https://drive.google.com/file/d/1SxX9-suhFDE1gNQqa4vSJIX22VHCOL9s/view?usp=drive_link"
    },
    {
      name: "UX Design Fundamentals",
      issuer: "Information Technology Institute - ITI",
      date: "2024",
      progress: 80,
      src: "https://drive.google.com/file/d/1aoA7OfZruzUgktgM162KbEs8HbwaPjN1/view?usp=drive_link"
    },
    {
      name: "Business English Track",
      issuer: "Berlitz Egypt",
      date: "2024",
      progress: 100,
      src: "https://drive.google.com/file/d/1frdZgluBLi7_1MDzES5moMmEY3pNrvUw/view?usp=drive_link"
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