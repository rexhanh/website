import { motion } from "motion/react";
import Card from "../../component/card";
import { projects } from "../../utils/constant";
export default function Project() {
  return (
    <div className=" mt-[64px] h-screen">
      <motion.div
        className="h-full flex flex-col px-5 gap-5 "
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
    </div>
  );
}
