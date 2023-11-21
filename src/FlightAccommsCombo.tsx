import React from 'react';
import { Alert, Card, CardActions, CardContent, IconButton, Snackbar, Typography } from "@mui/material";
import ResContStoreInstance from './ResultsContainerStore';
import { SearchBarStoreInstance } from './SearchBarStore';
import { observer } from 'mobx-react';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const FlightAccommsCombo:React.FC = observer(() => {
  const [open, setOpen] = React.useState(false);

  let flightPrice = 0, accommsPrice = 0;

  if (ResContStoreInstance.flightSelId) {
    const flightSel = SearchBarStoreInstance.flightsData.filter((flight) => {
      return flight.id === ResContStoreInstance.flightSelId
    })

    flightPrice = parseFloat(flightSel[0].price) / 1000;
  }

  if (ResContStoreInstance.accommsSelId) {
    const accommsSel = SearchBarStoreInstance.accommsData.filter((accomms) => {
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
          <IconButton aria-label="save">
            <FavoriteIcon style={{ color: "red" }} onClick={() => handleSave()}>
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

