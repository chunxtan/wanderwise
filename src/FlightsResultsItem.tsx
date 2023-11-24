import React from 'react';
import { FlightsData, SearchBarStoreInstance, UserInput } from './SearchBarStore';
import { Card, CardActionArea, CardContent, Paper, Typography } from '@mui/material';
import Stack from '@mui/system/Stack';
import './FlightsResultsItem.css';
import ResContStoreInstance from './ResultsContainerStore';
import { observer } from 'mobx-react';

type FlightsResProps = {
  flightsData: FlightsData
}

const FlightsResultsItem: React.FC<FlightsResProps> = observer(({ flightsData }) => {
  const resStore = ResContStoreInstance;
  const store = SearchBarStoreInstance;

  const handleClick = () => {
    if (resStore.flightSelId !== flightsData.id) {
      resStore.setFlightSelId(flightsData.id);
    } else {
      resStore.setFlightSelId(null);
    }
  }

  const formattedHourD = flightsData.departureDateTime.hour.toString().padStart(2, '0');
  const formattedMinuteD = flightsData.departureDateTime.minute.toString().padStart(2, '0');
  const formattedHourA = flightsData.arrivalDateTime.hour.toString().padStart(2, '0');
  const formattedMinuteA = flightsData.arrivalDateTime.minute.toString().padStart(2, '0');
  
  return (
    <Card 
      className="FlightsResItem" 
      sx={{ 
        backgroundColor: resStore.flightSelId === flightsData.id ? 'primary.main' : 'white', 
        color: resStore.flightSelId === flightsData.id ? 'white' : 'text.primary'
      }}>
      <CardActionArea onClick={() => handleClick()}>
        <CardContent>
          <Stack direction="row" spacing={2} style={{ justifyContent: "center", marginBottom: "6px" }}>
            <Typography variant="subtitle2">
              {store.iataCodes.origin.toUpperCase()} <br />
              {`${formattedHourD}:${formattedMinuteD}`}
            </Typography>
            <div>
              ➡️
            </div>
            <Typography variant="subtitle2">
              {store.iataCodes.destination.toUpperCase()} <br />
              {`${formattedHourA}:${formattedMinuteA}`}
            </Typography>
          </Stack>
          <Typography variant="h6">
            ${parseFloat(flightsData.price) / 1000}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ) 
})

export default FlightsResultsItem;