import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import { News } from "./Pages/News";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<News />} />
        </Routes>
      </Router>
    </div>
  );
};
