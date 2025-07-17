import { motion } from "motion/react";
import Card from "../../component/card";
import NavBar from "../../component/header";
import { projects } from "../../utils/constant";
import Footer from "../../component/footer";
export default function Project() {
  return (
    <div className="bg-white h-full w-full">
      <NavBar />
      <motion.div
        className="h-screen py-10 flex flex-col"
        animate={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: -20, x: -20 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <div className="px-6 pt-10 lg:px-8 " key={index}>
            <Card
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </motion.div>
      <Footer />
    </div>
  );
}
