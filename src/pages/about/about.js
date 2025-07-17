import { motion } from "motion/react";
import NavBar from "../../component/header";
import Footer from "../../component/footer";

export default function About() {
  return (
    <div className="bg-white h-full w-full">
      <NavBar />
      <div className="px-6 pt-14 lg:px-8 h-screen flex">
        <div className="mx-auto sm:py-10 lg:py-20 h-full flex flex-row align-center justify-center w-full">
          <motion.div
            className="w-full px-10 max-w-3xl h-full"
            animate={{ opacity: 1, y: 0, x: 0 }}
            initial={{ opacity: 0, y: -20, x: -20 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-semibold tracking-tight sm:text-7xl">
              About Me
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty sm:text-xl/8">
              Hi! I’m Yuanrong, but I go by Rex. I graduated from UC Berkeley in
              2020 with a B.S. in Electrical Engineering and Computer Science
              and am now pursuing a master’s degree at the University of
              Toronto, focusing on machine learning in education.
              <br />
              <br />
              At Berkeley, I worked with Python, Java, and C, and studied topics
              like algorithms, operating systems, AI, and deep learning. A
              highlight was building a voice-controlled vehicle with a custom
              microphone board. I also explored robotics and ROS.
              <br />
              <br />
              I’m passionate about teaching—I tutored math at Chaffey College
              and was a TA for a computer science course at Berkeley.
              Professionally, I’ve developed iOS apps with Swift and later moved
              to React Native for cross-platform development. I'm excited about
              creating tools that make learning more effective and accessible.
            </p>
          </motion.div>

          <motion.div className="w-full h-full">
            <iframe
              src="https://cdn.jsdelivr.net/gh/rexhanh/files@main/resume/Rex_Resume_latest.pdf#zoom=100"
              className="w-full h-full"
              title="Resume"
            ></iframe>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
