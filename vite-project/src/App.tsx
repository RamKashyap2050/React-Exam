import { useState } from "react";
import Form from './components/Form'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Results from "./components/Results";
function App() {

  return(
    <BrowserRouter>

    <div>
    <Routes>
        <Route path='/' element={<Form />} />
      <Route path='/results' element={<Results />} />
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
