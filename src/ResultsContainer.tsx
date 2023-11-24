import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import FlightsResults from './FlightsResults';
import AccommsResults from './AccommsResults';
import { FlightAccommsCombo } from './FlightAccommsCombo';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function ResultsContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={4} lg={4}>
          <FlightIcon fontSize='large' />
          <FlightsResults />
        </Grid>
        <Grid xs={12} md={4} lg={4}>
          <HotelIcon fontSize='large' />
          <AccommsResults />
        </Grid>
        <Grid xs={12} md={4} lg={2}>
          <AttachMoneyIcon fontSize='large' />
          <FlightAccommsCombo />
        </Grid>
      </Grid>
    </Box>
  )
}