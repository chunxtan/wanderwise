import React from 'react';
import './App.css'
import SearchBar from './SearchBar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import ResultsContainer from './ResultsContainer';

function App() {

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <SearchBar />
        <ResultsContainer />
      </LocalizationProvider>
    </>
  )
}

export default App
