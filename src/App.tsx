import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import { Governance } from "./Pages/Governance";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<Governance />} />
        </Routes>
      </Router>
    </div>
  );
}
