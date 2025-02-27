import { useState } from 'react'
import './css/App.css'
import Home from "./pages/Home"
import Favourites from "./pages/Favourites"
import {Routes,Route} from "react-router-dom"

import {DressProvider} from "./contexts/DressContext";
import NavBar from "./components/NavBar";

function App() {

  return (
    <DressProvider>
      
      <NavBar/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourite" element={<Favourites />}/>
      </Routes>

    </main>
    </DressProvider>
  );
}


export default App;


