import {Routes, HashRouter as Router, Route} from "react-router-dom";
import { Governance } from "./Pages/Governance";
import { GeneralNavBar } from "./Components";
import { Footer } from "./Components";
import Admission from "./Pages/Admission/Admission";
import Home from "./Pages/Home/Home";
export default function App() {
  return (
    <div className="App">
      <GeneralNavBar></GeneralNavBar>
      <Router>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route  path='/home/admissão' element={<Admission />} />
          <Route  path='/home/governança' element={<Governance />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}
