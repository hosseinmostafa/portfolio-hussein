import React from "react";
import { Card, CardBody, CardFooter, Button, Image, Chip, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface ProjectItemProps {
  title: string;
  featured?: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  figmaUrl?: string; // ✅ أضفت خاصية Figma هنا
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title, featured, description, image, tags, demoUrl, codeUrl, figmaUrl, index
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      className="section-transition"
    >
      <Card className="bg-content1/80 backdrop-blur-md h-full">
        <CardBody className="p-0 overflow-hidden">
          <Image
            removeWrapper
            alt={title}
            className="w-full h-48 object-cover"
            src={image}
          />
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold">{title}</h3>
              {featured && <Badge color="primary" variant="flat">{featured}</Badge>}
            </div>
            <p className="text-default-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, idx) => (
                <Chip key={idx} size="sm" variant="flat">{tag}</Chip>
              ))}
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex gap-2 justify-end">
          <Button
            as="a"
            href={codeUrl}
            target="_blank"
            variant="light"
            startContent={<Icon icon="lucide:github" />}
          >
            Code
          </Button>
          <Button
            as="a"
            href={demoUrl}
            target="_blank"
            color="primary"
            variant="flat"
            startContent={<Icon icon="lucide:external-link" />}
          >
            Live Demo
          </Button>
          {figmaUrl && ( // ✅ يظهر فقط لو فيه رابط
            <Button
              as="a"
              href={figmaUrl}
              target="_blank"
              variant="light"
              startContent={<Icon icon="lucide:figma" />}
            >
              Figma
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce HERFA",
      description: "HERFA is a modern online platform that showcases and sells unique handmade crafts, connecting skilled artisans with customers who appreciate authentic, handcrafted products.",
      image: "https://i.postimg.cc/JhpqLtHT/herfa.webp",
      featured: "Featured",
      tags: ["HTML5", "CSS3", "SASS", "TypeScript", "Bootstrap", "Angular", "Angular Guard", "Lazy Loading", "Firebase"],
      demoUrl: "https://herfa-finall.netlify.app",
      codeUrl: "https://github.com/hosseinmostafa/Egyptian-Treasures"
    },
    {
      title: "NuesHop Website",
      description: "NuesHop is a modern web platform that showcases and categorizes AI tools, helping users discover, explore, and access the latest in artificial intelligence technology.",
      image: "https://i.postimg.cc/cC9hd28p/ai.webp",
      featured: "Featured",
      tags: ["HTML", "CSS", "SASS", "Bootstrap", "Angular", "TypeScript", "Responsive Design"],
      demoUrl: "https://ai-web-project.netlify.app",
      codeUrl: "https://github.com/hosseinmostafa/Ai-web",
      figmaUrl: "https://www.figma.com/design/cmmi5azndAJLCZW4hElDzs/NuseHup?node-id=2-15&p=f&t=S6T3k52KDioQS5eZ-0"
    },
    {
      title: "E-commerce Shop.co",
      description: "Shop.co is a modern e-commerce platform offering a wide selection of clothing and accessories for men, women, and children, combining style, convenience, and a smooth shopping experience.",
      image: "https://i.postimg.cc/jqphKpCr/shop.webp",
      featured: "Featured",
      tags: ["HTML", "CSS", "SASS", "Bootstrap", "Angular", "TypeScript", "Firebase", "Angular Guard", "Lazy Loading", "Responsive Design"],
      demoUrl: "https://shop-tshirt.netlify.app/",
      codeUrl: "https://github.com/hosseinmostafa/ShopT-shirt",
      figmaUrl: "https://www.figma.com/design/qj7fQx3lVGNUp3fyn0FTXg/E-commerce-Website-Template--Freebie---Community-?node-id=39-1402&t=SSfX9gb0lKV6n6Tm-0"
    },
    {
      title: "Shop.co Website",
      description: "Prayer Times is a responsive web app that displays accurate daily prayer times based on user location, helping Muslims stay connected to their faith.",
      image: "https://i.postimg.cc/s2gYwyH5/prary.webp",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      demoUrl: "https://praryer-times.netlify.app/",
      codeUrl: "https://github.com/hosseinmostafa/Prayer-times"
    },
    {
      title: "Dashboard",
      description: "A responsive admin dashboard built with HTML, CSS, and JavaScript that provides a clean interface to monitor and manage data such as users, analytics, and system activity.",
      image: "https://img.heroui.chat/image/dashboard?w=800&h=400&u=1",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://dashboards-test-responsive-app.netlify.app",
      codeUrl: "https://github.com/hosseinmostafa/Dashboard"
    },
    {
      title: "Eventes",
      description: "A responsive event management website built with modern web technologies that allows users to browse, search, and book online and offline events. Features include event categories, detailed agendas, ticket purchasing, and an intuitive interface for discovering experiences such as cultural tours, workshops, and live performances.",
      image: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["HTML5", "CSS3", "SASS", "TypeScript", "Bootstrap", "Angular", "Angular Guard", "Firebase"],
      demoUrl: "https://hosseinmostafa.vercel.app/",
      codeUrl: "https://github.com/hosseinmostafa/Eventes"
    },
    {
      title: "Portfolio",
      description: "A responsive personal portfolio website built as a single-page application showcasing my skills, education, experience, and projects as a Frontend Developer. Designed with a modern, clean layout to highlight expertise in HTML, CSS, JavaScript, Angular, and other technologies, the site provides an engaging user experience with smooth navigation, light mode, and night mode support, and clear sections for About, Skills, Projects",
      image: "https://i.postimg.cc/QdcwqKqn/Screenshot-1063.png",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "PHP"],
      demoUrl: "https://hussein-portfolio-theta.vercel.app/",
      codeUrl: "https://github.com/hosseinmostafa/portfolio2"
    },
    {
      title: "Story",
      description: "An interactive 3D storytelling website featuring parallax scrolling, animated backgrounds, and smooth transitions to present my personal journey in an engaging and immersive way.",
      image: "https://i.postimg.cc/ZqQJGy1F/Screenshot-1064.png",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://story-home.netlify.app/",
      codeUrl: "https://github.com/hosseinmostafa/story"
    },
    {
      title: "Twitter Clone",
      description: "A static Twitter-like UI clone built with HTML, CSS, and JavaScript, featuring a clean layout and interactive elements, but without responsive design adaptation.",
      image: "https://i.postimg.cc/J4TzLnHn/Screenshot-1066.png",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "https://hosseinmostafa.github.io/twitter/",
      codeUrl: "https://github.com/hosseinmostafa/twitter"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-2xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            featured={project.featured}
            description={project.description}
            image={project.image}
            tags={project.tags}
            demoUrl={project.demoUrl}
            codeUrl={project.codeUrl}
            figmaUrl={project.figmaUrl}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};