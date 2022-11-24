import { Routes, Route, useLocation } from "react-router-dom";
import { GeneralNavBar, Footer } from "./Components";
import { VirtualTour, Governance, Admission, Home } from "./Pages";

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
      </Routes>
      <Footer style={{ display: isVirtualTour ? "none" : "block" }} />
    </div>
  );
}
