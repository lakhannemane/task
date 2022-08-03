import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contractor from "./components/Contractor";
import Dashbord from "./components/Dashbord";
import ViewModel from "./components/Modal/ViewModel";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work";


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar/>}/>
        <Route path="/Dashbord" element={<Dashbord/>}/>
        <Route path="/user" element={<Contractor  />}/>
        <Route path="/user/:id" element={<ViewModel />}/> 
        <Route path="/work" element={<Work/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}




export default App;
