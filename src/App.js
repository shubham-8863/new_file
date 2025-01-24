import logo from './logo.svg';
import './App.css';
import './index.css';
import { Header } from './mycomponents/Header';
import { About } from './mycomponents/About';
import { Home } from './mycomponents/Home';
import { Footer } from './mycomponents/Footer';
import React  from "react";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Footer/>
        
    </div>
  );
}

export default App;
