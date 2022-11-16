import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { WelcomeBanner } from "./Components/WelcomeBanner";
import img from './img.png'


export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" element = {<WelcomeBanner bannerHeight="360px" crumbColor="blue" bannerSrc={img} titleWidth = '900px'/>} />
        </Switch>
      </Router>
    </div>

  );
}
