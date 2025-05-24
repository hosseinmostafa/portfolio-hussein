import React from "react";
import { Card, CardBody, Input, Textarea, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_uhgj0kc', 'template_1ml027d', templateParams, 'VMwgEIZUTHFzyRdfH')
      .then(() => {
        setIsSubmitting(false);
        setName("");
        setEmail("");
        setMessage("");
        alert("Message sent successfully! 🚀");
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('EmailJS Error:', error);
        alert("Failed to send message. Please try again later.");
      });
  };
  
  const contactInfo = [
    {
      icon: "lucide:mail",
      label: "Email",
      value: "hesseinnmostafaa@gmail.com",
      link: "mailto:hesseinnmostafaa@gmail.com"
    },
    {
      icon: "lucide:phone",
      label: "Phone",
      value: "+20 1141756202",
      link: "tel:+201141756202"
    },
    {
      icon: "lucide:map-pin",
      label: "Location",
      value: "Egypt",
      link: "#"
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
        Contact Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-content1/80 backdrop-blur-md h-full">
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.link}
                    className="flex items-center gap-4 text-default-600 hover:text-primary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-content2 flex items-center justify-center">
                      <Icon icon={item.icon} width={20} height={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-default-500">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <Divider className="my-6" />
              
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/hosseinmostafa" 
                  className="w-10 h-10 rounded-full bg-content2 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  target="_blank"
                >
                  <Icon icon="logos:github-icon" width={20} height={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hessein-mostafa/" 
                  className="w-10 h-10 rounded-full bg-content2 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  target="_blank"
                >
                  <Icon icon="logos:linkedin-icon" width={20} height={20} />
                </a>
                <a 
                  href="tel:+201141756202" 
                  className="w-10 h-10 rounded-full bg-content2 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  target="_blank"
                >
                  <Icon icon="logos:whatsapp-icon" width={20} height={20} />
                </a>
              </div>
            </CardBody>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-content1/80 backdrop-blur-md">
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  variant="bordered"
                  isRequired
                />
                
                <Input
                  label="Email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  variant="bordered"
                  isRequired
                />
                
                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  variant="bordered"
                  minRows={4}
                  isRequired
                />
                
                <Button 
                  type="submit" 
                  color="primary" 
                  className="w-full"
                  isLoading={isSubmitting}
                  startContent={!isSubmitting && <Icon icon="lucide:send" />}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};