import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContextProvider";
import Navigation from "./components/Navigation";
import Background from "./components/Background";
import ThemeSwitch from "./components/ThemeSwitch";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeContextProvider>
      <ThemeSwitch />
      <Background />
      <BrowserRouter>
        <Navigation />
        <div className="container mx-auto h-full items-center px-5 pt-28 text-gray-900 dark:text-gray-50 md:px-10 lg:flex lg:px-64 lg:pt-0 xl:px-72">
          <Routes>
            <Route path="/" index={true} element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeContextProvider>
  );
};
export default App;
