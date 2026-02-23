import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { CourseSection } from "./components/CourseSection";
import { BookSection } from "./components/BookSection";
import { ProductSection } from "./components/ProductSection";
import { CentreSection } from "./components/CentreSection";
import { AcademicTrainingSection } from "./components/AcademicTrainingSection";
import { SocialMediaSection } from "./components/SocialMediaSection";
import { AwardSection } from "./components/AwardSection";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <CourseSection />
      <AcademicTrainingSection />
      <BookSection />
      <ProductSection />
      <CentreSection />
      <SocialMediaSection />
      <AwardSection />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
