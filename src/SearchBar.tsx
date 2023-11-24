import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from "@mui/x-date-pickers";
import './SearchBar.css'
import dayjs, { Dayjs } from 'dayjs'; 
import { Date, AccommsData, SearchBarStoreInstance, FlightsData } from "./SearchBarStore";
import { LoadingButton } from '@mui/lab';
import { observer } from 'mobx-react-lite';


export const SearchBar = observer(() => {

  const store = SearchBarStoreInstance;

  const getFlightIataCode = async (place: string) => {
    const url = 'https://getskyscanner.vercel.app/api/getCodes';

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "query":{
          "market": "SG",
          "locale": "en-GB",
          "searchTerm": place === "origin" ? store.userInput.origin : store.userInput.destination,
           "includedEntityTypes": [ "PLACE_TYPE_CITY", "PLACE_TYPE_AIRPORT"]
        }
      })
    }

    try {
      const response = await fetch(url, fetchOptions);
      const result = await response.json();
      if (place === "origin") {
      store.iataCodes.origin = result.places[0].iataCode
      } else {
        store.iataCodes.destination = result.places[0].iataCode
      }
      console.log(result.places[0]);
    } catch(error) {
      console.log(error);
    }
  }

  const getFlightOptions = async () => {
    const url = 'https://getskyscanner.vercel.app/api/getFlights'

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "query": {
          "market": "SG",
          "locale": "en-GB",
          "currency": "SGD",
          "query_legs": [
            {
              "origin_place_id": {
                "iata": `${store.iataCodes.origin}`
              },
              "destination_place_id": {
                "iata": `${store.iataCodes.destination}`
              },
              "date": {
                "year": store.userInput.fromDate.year,
                "month": store.userInput.fromDate.month,
                "day": store.userInput.fromDate.day
              }
            }
          ],
          "adults": 1,
          "cabin_class": "CABIN_CLASS_ECONOMY"
        }
      })
    }

    try {
      const response = await fetch(url, fetchOptions);
      const returnRes = await response.json();

      console.log(returnRes);
    
      const results = returnRes.content.results;
      let newFlightsData: FlightsData[] = [];
      for (let key in results.itineraries) {
        //@ts-ignore
        const itineraryVal = results.itineraries[key];
        newFlightsData.push({
          id: key,
          price: itineraryVal.pricingOptions[0].price.amount,
          //@ts-ignore
          departureDateTime: results.legs[key].departureDateTime,
          //@ts-ignore
          arrivalDateTime: results.legs[key].arrivalDateTime,
          //@ts-ignore
          flightDurationMin: results.legs[key].durationInMinutes,
          //@ts-ignore
          stopCount: results.legs[key].stopCount
        })
      }
      store.setFlightsData(newFlightsData);
    } catch(error) {
      console.log(error);
    }
  }

  const fetchFlights = async () => {
    await getFlightIataCode("origin");
    await getFlightIataCode("destination");
    getFlightOptions();
  }

  const getAccommsDestId = async () => {
    const baseUrl = 'https://getskyscanner.vercel.app/api/getAccommsDestId';

    const queryParams = {
      q: `${store.userInput.destination}`,
      locale: 'en_SG',
      siteid: '300000040'
    };

    const url = new URL(baseUrl);
    url.search = new URLSearchParams(queryParams).toString();

    try {
      const response = await fetch(url.href);
      const result = await response.json();
      console.log(result);
      store.accommsDestId = result.sr[0].gaiaId;
    } catch(error) {
      console.error(error);
    }
  }

  const getAccomms = async () => {
    const url = 'https://getskyscanner.vercel.app/api/getAccomms';

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        currency: 'SGD',
        eapid: 1,
        locale: 'en_SG',
        siteId: 300000040,
        destination: {
          regionId: `${store.accommsDestId}`
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
          price: listing.price.options[0].formattedDisplayPrice.slice(1),
          reviews: {
            score: listing.reviews.score,
            total: listing.reviews.total
          }
        }
      })
      console.log(newAccommsData);
      if (store.accommsData.length > 0) {
        store.accommsData = [];
      }
      store.setAccommsData(newAccommsData);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchAccoms = async() => {
    await getAccommsDestId();
    if (store.accommsDestId) {
      await getAccomms();
    } else {
      console.log("No DestId: ", store.accommsDestId)
    }
  }

  return (
    <Box
      id="input-form"
      component="form"
      noValidate
      autoComplete='off'
    >
      <div className="inputCat">
        <TextField 
          className="inputField"
          id="input-origin"
          label="Where From"
          type="search"
          variant="standard"
          sx={{ width: "25%", margin: 2 }}
          onChange={(e) => store.setUserInput({...store.userInput, origin:`${e.target.value}` })}
        />
        <TextField 
          className="inputField"
          id="input-dest"
          label="Where To"
          type="search"
          variant="standard"
          sx={{ width: "25%", margin: 2 }}
          onChange={(e) => store.setUserInput({...store.userInput, destination:`${e.target.value}` })}
        />
        <TextField 
          className="inputField"
          id="input-travellers"
          label="Travellers"
          type="number"
          variant="standard"
          sx={{ width: "25%", margin: 2 }}
          onChange={(e) => 
            store.setUserInput({
              ...store.userInput, 
              travellers: parseInt(e.target.value, 10) 
            })
          }
        />
      </div>
      <div className="inputCat">
        <DatePicker
          label="When From"
          sx={{ width: "35%", marginRight: 3 }}
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
          sx={{ width: "35%" }}
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
        { store.isFetchingData  
            ? <LoadingButton 
                loading 
                variant="contained" >
                <span>SEARCH</span>
              </LoadingButton>
            : <Button variant="contained" 
                onClick={async () => {
                  store.setIsFetchingData(true);
                  fetchFlights();
                  await fetchAccoms();
                  store.setIsFetchingData(false);
                }}>
                  SEARCH
              </Button>
        }
    </Box>
  )
})

export default SearchBar;