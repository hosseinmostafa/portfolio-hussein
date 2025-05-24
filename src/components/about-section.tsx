import React from "react";
import { Card, CardBody, Avatar, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <Card className="bg-content1/80 backdrop-blur-md">
        <CardBody className="gap-8 p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Avatar
                src="https://i.postimg.cc/sxw6v1b0/Alhussain.png"
                className="w-24 h-24 md:w-32 md:h-32 text-large"
                isBordered

              />
            </motion.div>

            <div className="flex-1">
              <motion.h1
                className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Alhussein Mostafa
              </motion.h1>

              <motion.h2
                className="text-lg md:text-xl text-default-600 mb-4 text-center md:text-left"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Front-end Developer based in Egypt
              </motion.h2>

              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-3 mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  as="a"
                  href="https://github.com/hosseinmostafa"
                  target="_blank"
                  variant="flat"
                  color="default"
                  startContent={<Icon icon="logos:github-icon" />}
                >
                  GitHub
                </Button>
                <Button
                  as="a"
                  href="https://www.linkedin.com/in/hessein-mostafa/"
                  target="_blank"
                  variant="flat"
                  color="primary"
                  startContent={<Icon icon="logos:linkedin-icon" />}
                >
                  LinkedIn
                </Button>
                <Button
                  as="a"
                  href="./files/Alhussein-Mostafa.pdf"
                  variant="flat"
                  target="_blank"
                  color="secondary"
                  startContent={<Icon icon="lucide:file-text" />}
                >
                  Resume
                </Button>
              </motion.div>
            </div>
          </div>

          <Divider />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-default-600 mb-4 max-w-3xl">
              A skilled Front-End Developer with a solid foundation in modern web technologies, including HTML5, CSS3, Bootstrap, and JavaScript.
              My expertise extends to working with advanced frameworks and libraries, particularly Angular, enabling me to build scalable and dynamic user interfaces.
            </p>
            <p className="text-default-600 mb-4 max-w-3xl">
              With proficiency in TypeScript, I ensure the development of efficient, maintainable, and high-performing web applications.
              Passionate about creating seamless user experiences, I stay updated on the latest industry trends and best practices,
              constantly refining my skills to deliver innovative and impactful solutions.
            </p>
          </motion.div>

          <Divider />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["HTML5", "CSS3", "Bootstrap", "Sass", "JavaScript", "TypeScript", "Angular", "Responsive Design", "Git", "GitHub", "Python", "C Programming", "SQLite", "jQuery",].map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-1 bg-content2 rounded-md text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>
  );
};