import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from "@mui/x-date-pickers";
import './SearchBar.css'
import dayjs from 'dayjs';

export default function SearchBar({ userInput, setUserInput, setAccommsData }) {
  const [destGaiaId, setDestGaiaId] = React.useState("");

  const getFlights = () => {

  }

  const getAccommsDestId = async () => {
    const baseUrl = 'https://hotels4.p.rapidapi.com/locations/v3/search';

    const queryParams = {
      q: `${userInput.destination}`,
      locale: 'en_SG',
      siteid: '300000040'
    };

    const url = new URL(baseUrl);
    url.search = new URLSearchParams(queryParams).toString();

    const fetchOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b500f91511mshf2caf0e30b9ee36p179951jsn5cccf8010b47',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url.href, fetchOptions);
      const result = await response.json();
      console.log(result);
      setDestGaiaId(result.sr[0].gaiaId);
      getAccomms();
    } catch(error) {
      console.error(error);
    }
  }

  const getAccomms = async () => {
    const url = 'https://hotels4.p.rapidapi.com/properties/v2/list';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'b500f91511mshf2caf0e30b9ee36p179951jsn5cccf8010b47',
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      },
      body: JSON.stringify({
        currency: 'SGD',
        eapid: 1,
        locale: 'en_SG',
        siteId: 300000040,
        destination: {
          regionId: '604'
        },
        checkInDate: {
          day: userInput.fromDate.day,
          month: userInput.fromDate.month,
          year: userInput.fromDate.year
        },
        checkOutDate: {
          day: userInput.toDate.day,
          month: userInput.toDate.month,
          year: userInput.toDate.year
        },
        rooms: [
          {
            adults: userInput.travellers,
            children: []
          }
        ],
        resultsStartingIndex: 0,
        resultsSize: 25,
        sort: 'REVIEW',
        filters: {guestRating: '40'}
      })
    };

    try {
      const response = await fetch(url, options);
      console.log(response);
      const result = await response.json();
      console.log(result);
      setAccommsData(result.data.propertySearch.properties);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box
      id="input-form"
      component="form"
      noValidate
      autoComplete='off'
    >
      <div id="input-where" className="inputCat">
        <TextField 
          className="inputField"
          id="input-origin"
          label="Where From"
          type="search"
          variant="standard"
          onChange={(e) => setUserInput((prevState) => {
            return {...prevState, origin:`${e.target.value}` }
          })}
        />
        <TextField 
          className="inputField"
          id="input-dest"
          label="Where To"
          type="search"
          variant="standard"
          onChange={(e) => setUserInput((prevState) => {
            return {...prevState, destination:`${e.target.value}` }
          })}
        />
      </div>
      <div id="input-who" className="inputCat">
        <TextField 
          className="inputField"
          id="input-travellers"
          label="Travellers"
          type="number"
          variant="standard"
          onChange={(e) => setUserInput((prevState) => {
            return {...prevState, travellers: parseInt(e.target.value, 10) }
          })}
        />
      </div>
      <div id="input=when" className="inputCat">
        <DatePicker
          label="When From"
          onChange={(date) => {
            const newFromDateArr = dayjs(date).format('DD/MM/YYYY').split('/');
            newFromDateArr.forEach(num => parseInt(num, 10));
            const newFromDate = {
              day: newFromDateArr[0],
              month: newFromDateArr[1],
              year: newFromDateArr[2]
            }
            setUserInput((prevInput) => {
            return {...prevInput, fromDate: newFromDate}
          })}}  
        />
        <DatePicker
          label="When To"
          onChange={(date) => {
            const newToDateArr = dayjs(date).format('DD/MM/YYYY').split('/');
            newToDateArr.forEach(num => parseInt(num, 10));
            const newToDate = {
              day: newToDateArr[0],
              month: newToDateArr[1],
              year: newToDateArr[2]
            }
            setUserInput((prevInput) => {
            return {...prevInput, toDate: newToDate}
          })}}  
        />
      </div>
      <Button variant="contained" 
        onClick={() => {
          getAccomms();
        }}>
          SEARCH
      </Button>
      
    </Box>
  )
}