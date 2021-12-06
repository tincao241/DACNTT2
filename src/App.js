import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Vaccine from "./Vaccine";
import Variant from "./Variant";
import World from "./World"
import {ScrollToTop} from "./ScrollToTop.js"

function App() {
  return (
    
      <Router>
        
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/world" component={World} />
          <Route path="/vaccine" component={Vaccine} />
          <Route path="/variant" component={Variant}/>
        </Switch>
        <ScrollToTop />
      </Router>
    
  );
}

export default App;
