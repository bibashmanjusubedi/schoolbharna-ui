import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Careers from "../pages/Careers";
import InstitutionsViewal from "../pages/InstitutionsViewal";

export default function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/institutions-viewal" element={<InstitutionsViewal />}/>
        </Routes>
      </BrowserRouter>
    );
  }