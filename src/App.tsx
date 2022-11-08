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
          <Route path="/cleber" element = {<Breadcrumbs/>}>
          </Route>
          <Route path="/" element = {<Breadcrumbs/>}>
          </Route>
        </Routes>
    </Router>
  );
}
