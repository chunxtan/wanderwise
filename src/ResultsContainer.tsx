import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import FlightsResults from './FlightsResults';
import AccommsResults from './AccommsResults';
import { FlightAccommsCombo } from './FlightAccommsCombo';

export default function ResultsContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={4} lg={4}>
          <FlightsResults />
        </Grid>
        <Grid xs={12} md={4} lg={4}>
          <AccommsResults />
        </Grid>
        <Grid xs={12} md={4} lg={2}>
          <FlightAccommsCombo />
        </Grid>
      </Grid>
    </Box>
  )
}