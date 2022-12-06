import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
