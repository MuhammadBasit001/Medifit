
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Homemain from "./Components/Home/Homemain"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homemain />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
