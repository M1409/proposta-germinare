import { Routes, Route, useLocation } from "react-router-dom";
import { Governance } from "./Pages/Governance";
import { GeneralNavBar } from "./Components";
import { Footer } from "./Components";
import Admission from "./Pages/Admission/Admission";
import { VirtualTour } from "./Pages/VirtualTour";
import Home from "./Pages/Home/Home";
import { useState, useEffect } from "react";
export default function App() {
  const [tour, setTour] = useState(false);
  const location = useLocation()
  useEffect(()=>{
    if(location.pathname == '/tour'){
      setTour(true)
    } else{
      setTour(false)
    }
  }, [location])
  return (
    <div className="App">
      {!tour ? (
          <>
          <GeneralNavBar></GeneralNavBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home/admissão" element={<Admission />} />
              <Route path="/home/governança" element={<Governance />} />
              <Route
                path="/tour"
                element={<VirtualTour />}
              />
            </Routes>
          <Footer></Footer>
          </>
      ) : (
            <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/tour"
                element={<VirtualTour />}
              />
            </Routes>
            </>
      )}
      </div>
  );
}
