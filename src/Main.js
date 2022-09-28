import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Footer from "./Layout/Footer";
import Profile from "./Components/Profile";
import Products from "./Components/Products";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Certificate1 from "./Components/Certificate1";
import Certificate2 from "./Components/Certificate2";
import Certificate4 from "./Components/Certificate4";
import Certificate5 from "./Components/Certificate5";
import KitchenSet from "./Components/KitchenSet";
import KitchenTowel from "./Components/KitchenTowel";
import Fouta from "./Components/Fouta";
import ToteBags from "./Components/ToteBags";
import BeachMatress from "./Components/BeachMatress";
import Runners from "./Components/Runners";
import Placemat from "./Components/Placemat";
import Cushion from "./Components/Cushion.js";
import TableCloth from "./Components/TableCloth";
import Apron from "./Components/Apron";

function Main() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Certificate1" element={<Certificate1 />} />
          <Route path="/Certificate2" element={<Certificate2 />} />
          <Route path="/Certificate4" element={<Certificate4 />} />
          <Route path="/Certificate5" element={<Certificate5 />} />
          <Route path="/Certificate5" element={<Certificate5 />} />
          <Route path="/kitchenset" element={<KitchenSet />} />
          <Route path="/Kitchentowel" element={<KitchenTowel />} />
          <Route path="/Apron" element={<Apron />} />
          <Route path="/fouta" element={<Fouta />} />
          <Route path="/totebags" element={<ToteBags />} />
          <Route path="/runner" element={<Runners />} />
          <Route path="/placemat" element={<Placemat />} />
          <Route path="/beachmatress" element={<BeachMatress />} />
          <Route path="/cushion" element={<Cushion />} />
          <Route path="/tablecloth" element={<TableCloth />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default Main;
