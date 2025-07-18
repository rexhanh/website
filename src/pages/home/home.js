import { motion } from "motion/react";
import NavBar from "../../component/header";
import Footer from "../../component/footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen m-0 bg-transparent">
      <div className="bg-transparent">
        <NavBar />
      </div>

      <div className="flex-1 flex flex-col justify-center overflow-auto">
        <div className="max-h-1/2 flex flex-col md:flex-row gap-10">
          <motion.div
            className="flex flex-row w-full md:w-1/4 p-5 items-center"
            animate={{ opacity: 1, y: 0, x: 0 }}
            initial={{ opacity: 0, y: -20, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/rexhanh/files@main/images/Me.JPEG"
              alt="Me"
              className="rounded-full shadow-lg mx-auto "
            />
          </motion.div>
          <motion.div
            className="md:w-3/4 p-4"
            animate={{ opacity: 1, y: 0, x: 0 }}
            initial={{ opacity: 0, y: -20, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Hello there! <br /> My name is Rex!
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              I am a Master of Engineering student at the University of Toronto,
              passionate about developing AI-powered applications that enhance
              education, accessibility, and communication.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
