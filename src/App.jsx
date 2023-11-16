import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./routes/Characters";
import Comics from "./routes/Comics";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
      </Routes>
    </Router>
  );
  // <>"Jarvis ? Drop my needle"</>;
};

export default App;
