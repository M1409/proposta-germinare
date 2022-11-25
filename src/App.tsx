import { Routes, Route, useLocation } from "react-router-dom";
import { lazy } from "react";
const GeneralNavBar = lazy(()=> import("./Components").then(({ GeneralNavBar }) => ({ default: GeneralNavBar })))
const Footer = lazy(()=> import("./Components").then(({ Footer }) => ({ default: Footer })))
const News = lazy(()=> import("./Pages").then(({ News }) => ({ default: News })))
const Governance = lazy(()=> import("./Pages").then(({ Governance }) => ({ default: Governance })))
const Admission = lazy(()=> import("./Pages").then(({ Admission }) => ({ default: Admission })))
const VirtualTour = lazy(()=> import("./Pages").then(({ VirtualTour }) => ({ default: VirtualTour })))
const Home = lazy(()=> import("./Pages").then(({ Home }) => ({ default: Home })))

export default function App() {
  const { pathname } = useLocation();
  const isVirtualTour = pathname === "/tour";

  return (
    <div className="App">
      <GeneralNavBar style={{ display: isVirtualTour ? "none" : "block" }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/admissão" element={<Admission />} />
        <Route path="/home/governança" element={<Governance />} />
        <Route path="/tour" element={<VirtualTour />} />
        <Route path="/notícias" element={<News />} />
      </Routes>
      <Footer style={{ display: isVirtualTour ? "none" : "block" }} />
    </div>
  );
}
