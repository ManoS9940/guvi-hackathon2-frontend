import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./Components/HomePage/Dashboard";
import Movies from "./Components/Movies/Movies";
import Theatres from "./Components/Movies/Theatre";
import Seat from "./Components/Movies/Seat";

export default function Router() {
  return (
    <>
      <div>
       <Dashboard />
        <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<Movies />} />
            <Route path="/booking" element={<Theatres />} />
            <Route path="/seatbooking" element={<Seat />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}