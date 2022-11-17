import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { WelcomeBanner } from "./Components/WelcomeBanner";
import  { Governance } from "./Pages/Governance/index";
import img from './img.png'

export default function App() {
  return (
    <div className="App">
      <Governance />
    </div>
  );
}
