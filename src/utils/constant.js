const navigation = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/#about" },
  { name: "Projects", href: "/#projects" },
];

const projects = [
  {
    title: "Snerfu Chat Bot",
    description:
      "A chat bot that developed for University of Toronto APS105. It helps and guide students through the online textbook, and answers questions about the textbook.",
    link: "https://www.learningc.org",
  },
  {
    title: "Commandline Stock Tracker",
    description:
      "A Rust powered commandline stock tracker that tracks stocks in real time.",
    link: "https://github.com/rexhanh/1724_final_project",
  },

  {
    title: "Maze Runner",
    description:
      "Our team has designed custom algorithm for TurtleBot. The green paper was the imaginary wall of the maze, and a camera was on a tripod to provide vision for the robot. The robot will find the other opening as the exit with our custom A*, and move towards it. More detailed description will be in the link.",
    link: "https://robot-gang.github.io/maze-runner/",
  },
];

export { navigation, projects };
