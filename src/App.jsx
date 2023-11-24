import React from 'react';
import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import { Routes, Route } from "react-router-dom";
import { Home } from './Home';
import { Saved } from './Saved';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <h1>Wanderwise</h1>
      <NavBar />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </LocalizationProvider>
    </>
  )
}

export default App
