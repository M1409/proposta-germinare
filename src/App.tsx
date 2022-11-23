import { useState, useEffect, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
const Governance = lazy(()=> import("./Pages/Governance").then(({ Governance }) => ({ default: Governance })))
const GeneralNavBar = lazy(()=> import("./Components").then(({ GeneralNavBar }) => ({ default: GeneralNavBar })))
const Footer = lazy(()=> import("./Components").then(({ Footer }) => ({ default: Footer })))
const Admission = lazy(() => {
  return Promise.all([
    import("./Pages/Admission").then(({ Admission }) => ({ default: Admission })),
    new Promise(resolve => setTimeout(resolve, 6000))
  ])
  .then(([moduleExports]) => moduleExports);
});
const VirtualTour = lazy(()=> import("./Pages/VirtualTour").then(({ VirtualTour }) => ({ default: VirtualTour })))
const Home = lazy(() => {
  return Promise.all([
    import("./Pages/Home"),
    new Promise(resolve => setTimeout(resolve, 6000))
  ])
  .then(([moduleExports]) => moduleExports);
});
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