import React from 'react';
import './App.css'
import SearchBar from './SearchBar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';

function App() {

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <SearchBar />
      </LocalizationProvider>
    </>
  )
}

export default App
