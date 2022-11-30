import { Routes, Route, useLocation } from "react-router-dom";
import { lazy } from "react";
const GeneralNavBar = lazy(()=> import("./Components").then(({ GeneralNavBar }) => ({ default: GeneralNavBar })))
const Footer = lazy(()=> import("./Components").then(({ Footer }) => ({ default: Footer })))
const Admission = lazy(()=> import("./Pages/Admission").then(({ Admission }) => ({ default: Admission })))
const VirtualTour = lazy(()=> import("./Pages/VirtualTour").then(({ VirtualTour }) => ({ default: VirtualTour })))
const Home = lazy(()=> import("./Pages/Home").then(({ Home }) => ({ default: Home })))
const Academic = lazy(()=> import("./Pages/Academic").then(({ Academic }) => ({ default: Academic })))
const AboutUs = lazy(()=> import("./Pages/AboutUs").then(({ AboutUs }) => ({ default: AboutUs })))
const News = lazy(()=> import("./Pages").then(({ News }) => ({ default: News })))
const Governance = lazy(()=> import("./Pages").then(({ Governance }) => ({ default: Governance })))
export default function App() {
  const { pathname } = useLocation();
  const isVirtualTour = pathname === "/tour";

  return (
    <div className="App">
      <GeneralNavBar style={{ display: isVirtualTour ? "none" : "block" }} />
      <Routes>
        <Route path="/" element={<AboutUs/>} />
        <Route path="home/acadêmico" element={<Academic />} />
        <Route path="/home/admissão" element={<Admission />} />
        <Route path="/home/governança" element={<Governance />} />
        <Route path="/tour" element={<VirtualTour />} />
        <Route path="/notícias" element={<News />} />
      </Routes>
      <Footer style={{ display: isVirtualTour ? "none" : "block" }} />
    </div>
  );
}
