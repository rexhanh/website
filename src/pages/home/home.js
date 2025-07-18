import { motion } from "motion/react";
import NavBar from "../../component/header";
import Footer from "../../component/footer";

export default function Home() {
  return (
    <div className="bg-white h-full w-full">
      <NavBar />
      <div className="relative isolate px-6 pt-14 lg:px-8 h-screen flex">
        <div className="mx-auto max-w-5xl flex flex-row items-center justify-center h-full">
          <motion.div
            className="mx-auto px-5 w-1/4 max-w-md text-center justify-center"
            animate={{ opacity: 1, y: 0, x: 0 }}
            initial={{ opacity: 0, y: -20, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/rexhanh/files@main/images/Me.JPEG"
              alt="Me"
              className="rounded-full shadow-lg mx-auto"
            />
          </motion.div>
          <motion.div
            className="text-left mx-auto px-5 py-10 w-3/4 max-w-md"
            animate={{ opacity: 1, y: 0, x: 0 }}
            initial={{ opacity: 0, y: -20, x: 50 }}
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
