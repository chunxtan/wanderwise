import React from 'react';
import { FlightsData, SearchBarStoreInstance, UserInput } from './SearchBarStore';
import { Card, CardContent, Paper } from '@mui/material';
import Stack from '@mui/system/Stack';
import './FlightsResultsItem.css';

type FlightsResProps = {
  flightsData: FlightsData
}

const FlightsResultsItem: React.FC<FlightsResProps> = ({ flightsData }) => {
  const store = SearchBarStoreInstance;
  return (
    <Card className="FlightsResItem">
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
    </Card>
  ) 
}

export default FlightsResultsItem;