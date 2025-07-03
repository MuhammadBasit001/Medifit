
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Homemain from "./Components/Home/Homemain"
import AboutMain from "./Components/About/AboutMain";
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path= "/About" element ={<AboutMain />} />
          <Route path= "/Contact" element = {<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
