import React from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import { Home,About,Contact,Projects } from "./pages";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </main>
    
  )
};

export default App;
