import './App.css';
import './index.css';
import { Header } from './mycomponents/Header';
import { About } from './mycomponents/About';
import { Home } from './mycomponents/Home';
import { Footer } from './mycomponents/Footer';
import React, {useState} from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {

  const [contentImage, setContentImage] = useState(null); // For storing the content image file
  const [styleImage, setStyleImage] = useState(null); // For storing the style image file
  const [loading, setLoading] = useState(false); // For tracking loading state
  const [outputUrl, setOutputUrl] = useState(""); // For storing the URL of the output image

  const handleContentChange = (e) =>{console.log('Content image selected:', e.target.files[0]); setContentImage(e.target.files[0])}
  const handleStyleChange = (e) =>{console.log('Style image selected:', e.target.files[0]); setStyleImage(e.target.files[0])}

  const handleUpload = async () => {
    if (!contentImage || !styleImage) {
      alert("Please upload both content and style images.");
      return;
    }

    const formData = new FormData();
    formData.append("content_image", contentImage);
    formData.append("style_image", styleImage);

    console.log('Sending data:', formData); // log form data

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/style-transfer", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log('Response from backend:', response.data); // Log the response
      setOutputUrl(response.data.output);
    } catch (error) {
      console.error("Error during style transfer:", error); // Log error if occurs
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home uploadcontent ={handleContentChange} uploadstyle ={handleStyleChange} submit = {handleUpload} output={outputUrl} 
                loading={loading}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

