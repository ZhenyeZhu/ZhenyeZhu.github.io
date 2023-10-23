import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Experience from "./pages/experience";
import Resume from "./pages/resume";
import Projects from "./pages/projects";

function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
