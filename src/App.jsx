import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./routes/Characters";
import Comics from "./routes/Comics";
import CharacterId from "./routes/CharacterId";
import Home from "./routes/Home";
import ComicId from "./routes/ComicId";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/characters"
          element={<Characters search={search} />}
        ></Route>
        <Route path="/comics" element={<Comics search={search} />}></Route>
        <Route path="/comics/:characterId" element={<CharacterId />}></Route>
        <Route path="/comic/:comicId" element={<ComicId />}></Route>
      </Routes>
    </Router>
  );
  // <>"Jarvis ? Drop my needle"</>;
};

export default App;
