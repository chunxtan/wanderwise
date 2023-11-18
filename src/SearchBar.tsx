import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from "@mui/x-date-pickers";
import './SearchBar.css'
import dayjs, { Dayjs } from 'dayjs';
import { Date, AccommsData, SearchBarStoreInstance } from "./SearchBarStore";

export const SearchBar = () => {
  const [destGaiaId, setDestGaiaId] = React.useState("");

  const store = SearchBarStoreInstance;

  const getFlights = () => {

  }

  const getAccommsDestId = async () => {
    const baseUrl = 'https://hotels4.p.rapidapi.com/locations/v3/search';

    const queryParams = {
      q: `${store.userInput.destination}`,
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
          day: store.userInput.fromDate.day,
          month: store.userInput.fromDate.month,
          year: store.userInput.fromDate.year
        },
        checkOutDate: {
          day: store.userInput.toDate.day,
          month: store.userInput.toDate.month,
          year: store.userInput.toDate.year
        },
        rooms: [
          {
            adults: store.userInput.travellers,
            children: []
          }
        ],
        resultsStartingIndex: 0,
        resultsSize: 25,
        sort: 'RECOMMENDED',
        filters: {guestRating: '40'}
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      const newAccommsData: AccommsData[] = result.data.propertySearch.properties.map((listing:any) => {
        return {
          id: listing.id,
          name: listing.name,
          image: listing.propertyImage.image.url,
          mapMarker: {
            lat: listing.mapMarker.latLong.latitude,
            long: listing.mapMarker.latLong.longitude
          },
          price: listing.price.options[0].formattedDisplayPrice,
          reviews: {
            score: listing.reviews.score,
            total: listing.reviews.total
          }
        }
      })
      console.log(newAccommsData);
      store.setAccommsData(newAccommsData);
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
          onChange={(e) => store.setUserInput({...store.userInput, origin:`${e.target.value}` })}
        />
        <TextField 
          className="inputField"
          id="input-dest"
          label="Where To"
          type="search"
          variant="standard"
          onChange={(e) => store.setUserInput({...store.userInput, destination:`${e.target.value}` })}
        />
      </div>
      <div id="input-who" className="inputCat">
        <TextField 
          className="inputField"
          id="input-travellers"
          label="Travellers"
          type="number"
          variant="standard"
          onChange={(e) => 
            store.setUserInput({
              ...store.userInput, 
              travellers: parseInt(e.target.value, 10) 
            })
          }
        />
      </div>
      <div id="input=when" className="inputCat">
        <DatePicker
          label="When From"
          onChange={(date: Dayjs | null) => {
            const newFromDateArrStr = dayjs(date).format('DD/MM/YYYY').split('/');
            const newFromDateArr = newFromDateArrStr.map(num => parseInt(num, 10));
            const newFromDate: Date = {
              day: newFromDateArr[0],
              month: newFromDateArr[1],
              year: newFromDateArr[2]
            }
            store.setUserInput({...store.userInput,
              fromDate: newFromDate})}}  
        />
        <DatePicker
          label="When To"
          onChange={(date: Dayjs | null) => {
            const newToDatArrStr = dayjs(date).format('DD/MM/YYYY').split('/');
            const newToDateArr = newToDatArrStr.map(num => parseInt(num, 10));
            const newToDate: Date = {
              day: newToDateArr[0],
              month: newToDateArr[1],
              year: newToDateArr[2]
            }
            store.setUserInput({...store.userInput,
              toDate: newToDate})}}  
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

export default SearchBar;