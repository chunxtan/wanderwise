import React from 'react';
import { Alert, Card, CardActions, CardContent, IconButton, Snackbar, Typography } from "@mui/material";
import ResContStoreInstance from './ResultsContainerStore';
import { SearchBarStoreInstance } from './SearchBarStore';
import { observer } from 'mobx-react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Airtable from 'airtable';

export const FlightAccommsCombo:React.FC = observer(() => {
  const [open, setOpen] = React.useState(false);

  let flightPrice = 0, accommsPrice = 0;
  let flightSel, accommsSel;

  if (ResContStoreInstance.flightSelId) {
    flightSel = SearchBarStoreInstance.flightsData.filter((flight) => {
      return flight.id === ResContStoreInstance.flightSelId
    })

    flightPrice = parseFloat(flightSel[0].price) / 1000;
  }

  if (ResContStoreInstance.accommsSelId) {
    accommsSel = SearchBarStoreInstance.accommsData.filter((accomms) => {
      return accomms.id === ResContStoreInstance.accommsSelId
    })

    accommsPrice = parseFloat(accommsSel[0].price.replace(/[^\d]/g, ""));
  }

  const totalPrice = (flightPrice + accommsPrice);

  const handleSave = () => {
    setOpen(true);
    addToSaved();
  }

  const addToSaved = () => {
    let base = new Airtable({
      apiKey: `${import.meta.env.VITE_REACT_AIRTABLE_KEY}`
    }).base('app5W1PLrSDCWkUXx');

    const fromDateObj = SearchBarStoreInstance.userInput.fromDate;
    const fromDate = `${fromDateObj.year}-${fromDateObj.month}-${fromDateObj.day}`;

    const toDateObj = SearchBarStoreInstance.userInput.toDate;
    const toDate = `${toDateObj.year}-${toDateObj.month}-${toDateObj.day}`;

    base('tblVFNjPi1Tq9xN3d').create([
      {
        //@ts-ignore
        "fields": {
          "origin": SearchBarStoreInstance.userInput.origin,
          "destination": SearchBarStoreInstance.userInput.destination,
          "travellers": SearchBarStoreInstance.userInput.travellers,
          "fromDate": fromDate,
          "toDate": toDate,
          "flightCost": flightPrice,
          "accommsCost": accommsPrice
        }
      }
    ], function(err: any, records: any[]) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach((record) => {
        console.log(record.getId())
      })
    })
  }


  return (
    <>
      <Card>
        <CardContent>
            <Typography variant="subtitle2">
              Total Cost
            </Typography>
            <Typography variant="h6">
              ${totalPrice}
            </Typography>
            <Typography variant="caption">Flights - ${flightPrice}</Typography>
            <br />
            <Typography variant="caption">Accomms - ${accommsPrice}</Typography>
        </CardContent>
        <CardActions style={{ display: "block" }}>
          <IconButton aria-label="save" onClick={() => handleSave()}>
            <FavoriteIcon style={{ color: "red" }}>
              SAVE
            </FavoriteIcon>
          </IconButton>
        </CardActions>
      </Card>
      <Snackbar 
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        open={open}
        message="Trip Details Saved!"
        onClose={() => setOpen(false)}
        autoHideDuration={5000}
      >
        <Alert severity="success">Trip details saved!</Alert>
      </Snackbar>
    </>
  )
})

