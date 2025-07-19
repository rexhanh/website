import { motion } from "motion/react";

export default function About() {
  return (
    <div className="flex flex-col w-full mt-5 h-[calc(100vh-64px)]">
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden mb-5">
        <motion.div
          className="h-1/2 md:h-full md:w-1/2 overflow-auto p-4"
          animate={{ opacity: 1, y: 0, x: 0 }}
          initial={{ opacity: 0, y: -20, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            About Me
          </h1>
          <p className="mt-8 text-lg text-pretty text-gray-600 sm:text-xl/8">
            Hi! I’m Yuanrong, but I go by Rex. I graduated from UC Berkeley in
            2020 with a B.S. in Electrical Engineering and Computer Science and
            am now pursuing a master’s degree at the University of Toronto,
            focusing on machine learning in education.
            <br />
            <br />
            At Berkeley, I worked with Python, Java, and C, and studied topics
            like algorithms, operating systems, AI, and deep learning. A
            highlight was building a voice-controlled vehicle with a custom
            microphone board. I also explored robotics and ROS.
            <br />
            <br />
            I’m passionate about teaching—I tutored math at Chaffey College and
            was a TA for a computer science course at Berkeley. Professionally,
            I’ve developed iOS apps with Swift and later moved to React Native
            for cross-platform development. I'm excited about creating tools
            that make learning more effective and accessible.
          </p>
        </motion.div>
        <div className="h-1/2 md:h-full md:w-1/2">
          <iframe
            src="https://cdn.jsdelivr.net/gh/rexhanh/files@main/resume/Rex_Resume.pdf#zoom=75"
            className="w-full h-full md:h-full"
            title="Resume"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
