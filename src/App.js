import './App.css';
import './index.css';
import { Header } from './mycomponents/Header';
import { About } from './mycomponents/About';
import { Home } from './mycomponents/Home';
import { Footer } from './mycomponents/Footer';
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [contentImage, setContentImage] = useState(null);
  const [styleImage, setStyleImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [outputUrl, setOutputUrl] = useState("");

  const handleContentChange = (e) => {
    console.log("Content image selected:", e.target.files[0]);
    setContentImage(e.target.files[0]);
  };

  const handleStyleChange = (e) => {
    console.log("Style image selected:", e.target.files[0]);
    setStyleImage(e.target.files[0]);
  };

  



  const handleUpload = async () => {
    if (!contentImage || !styleImage) {
      alert("Please upload both content and style images.");
      return;
    }
  
    const formData = new FormData();
    formData.append("content_image", contentImage);
    formData.append("style_image", styleImage);
  
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/style-transfer", formData, {
        responseType: 'blob', // Expect an image file response
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("Response from backend:", response);
      
      // Create a URL for the image blob
      const imageUrl = URL.createObjectURL(response.data);
      setOutputUrl(imageUrl); // Use imageUrl to render the image
    } catch (error) {
      console.error("Error during style transfer:", error);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <Router>
      <div className=' bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600'>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Home
                uploadcontent={handleContentChange}
                uploadstyle={handleStyleChange}
                submit={handleUpload}
                output={outputUrl}
                loading={loading}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

