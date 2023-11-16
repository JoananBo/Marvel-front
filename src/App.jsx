import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./routes/Characters";
import Comics from "./routes/Comics";
import CharacterId from "./routes/CharacterId";
import Home from "./routes/Home";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/comics/:characterId" element={<CharacterId />}></Route>
      </Routes>
    </Router>
  );
  // <>"Jarvis ? Drop my needle"</>;
};

export default App;
