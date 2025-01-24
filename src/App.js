import './App.css';
import './index.css';
import { Header } from './mycomponents/Header';
import { About } from './mycomponents/About';
import { Home } from './mycomponents/Home';
import { Footer } from './mycomponents/Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

//for routing "yarn add react-router-dom"