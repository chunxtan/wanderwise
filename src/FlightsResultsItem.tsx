import React from 'react';
import { FlightsData, SearchBarStoreInstance, UserInput } from './SearchBarStore';
import { Card, CardActionArea, CardContent, Paper } from '@mui/material';
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
  return (
    <Card 
      className="FlightsResItem" 
      sx={{ 
        backgroundColor: resStore.flightSelId === flightsData.id ? 'primary.main' : 'white', 
        color: resStore.flightSelId === flightsData.id ? 'white' : 'text.primary'
      }}>
      <CardActionArea onClick={() => handleClick()}>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <div>
              {store.iataCodes.origin.toUpperCase()} <br />
              {flightsData.departureDateTime.hour + "." + flightsData.departureDateTime.minute}
            </div>
            <div>
              ➡️
            </div>
            <div>
              {store.iataCodes.destination.toUpperCase()} <br />
              {flightsData.arrivalDateTime.hour + "." + flightsData.arrivalDateTime.minute}
            </div>
          </Stack>
          <Paper>
            ${parseFloat(flightsData.price) / 1000}
          </Paper>
        </CardContent>
      </CardActionArea>
    </Card>
  ) 
})

export default FlightsResultsItem;