import { motion } from "motion/react";
import Card from "../../component/card";
import NavBar from "../../component/header";
import { projects } from "../../utils/constant";
import Footer from "../../component/footer";
export default function Project() {
  return (
    <div className="bg-white h-full">
      <div className="bg-transparent">
        <NavBar />
      </div>
      <motion.div
        className="h-full flex flex-col px-5 gap-5"
        animate={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: -20, x: -20 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project, index) => (
          <div key={index}>
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
