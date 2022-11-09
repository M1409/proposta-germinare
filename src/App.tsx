import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import { Breadcrumbs } from "./Components/Breadcrumbs";


export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/cleber/jorge/jorjao" element = {<Breadcrumbs crumbColor="red"/>}>
          </Route>
          <Route path="/" element = {<Breadcrumbs crumbColor=""/>}>
          </Route>
        </Routes>
    </Router>
  );
}
