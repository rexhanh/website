import "./App.css";
import Home from "./pages/home/home";
import Project from "./pages/project/project";
import About from "./pages/about/about";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./component/header";
import Footer from "./component/footer";
import MyChatBot from "./component/chatbot";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <ChatBot /> */}
      <MyChatBot />
      <Footer />
    </HashRouter>
  );
}

export default App;
