// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home";

const App = () => {
  const [lang, setLang] = useState("en"); // "en" | "pt" | "es"

  return (
    <Router>
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
