import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Arithmetic from "./pages/Arithmetic";
import Home from "./pages/Home";
import Matrices from "./pages/Matrices";

import './css/general.css'

export default function App() {
  return (
    <div className="App">
				<Router>
          <div className="non-footer">
            <Header/>
            <div className="content">
              <Switch>
                <Route exact path="/"          > <Home/>       </Route>
                <Route exact path="/arithmetic"> <Arithmetic/> </Route>
                <Route exact path="/matrices"  > <Matrices/>   </Route>
              </Switch>
            </div>
          </div>
          <Footer/>
				</Router>
    </div>
  );
}

