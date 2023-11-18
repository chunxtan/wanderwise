import React from 'react';
import './App.css'
import SearchBar from './SearchBar'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';

function App() {
  const [userInput, setUserInput] = React.useState({
    origin: "",
    destination: "",
    travellers: 0,
    fromDate: {
      day: 0,
      month: 0,
      year: 0
    },
    toDate: {
      day: 0,
      month: 0,
      year: 0
    }
  })

  const [accommsData, setAccommsData] = React.useState([]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <SearchBar userInput={userInput} setUserInput={setUserInput} setAccommsData={setAccommsData} />
      </LocalizationProvider>
    </>
  )
}

export default App
