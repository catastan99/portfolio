import Home from "./pages/Home";
import "./scss/styles.scss";
import { Routes, Route } from "react-router-dom";
import './scss/styles.scss'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
