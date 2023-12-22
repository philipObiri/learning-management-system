import Home from "./Home";
import Header from './Header';
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import CourseDetail from "./CourseDetail";

import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div className="flex-shrink-0">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/detail/:course_id" element={<CourseDetail/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Main;