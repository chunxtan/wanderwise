import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import ResContStoreInstance from './ResultsContainerStore';
import { SearchBarStoreInstance } from './SearchBarStore';
import { observer } from 'mobx-react';

export const FlightAccommsCombo:React.FC = observer(() => {
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

  const totalPrice = flightPrice + accommsPrice;

  return (
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
    </Card>
  )
})

