import React from 'react';
import AccommsResults from './AccommsResults';
import Airtable from 'airtable';
import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export const Saved: React.FC = () => {
  const [savedTrips, setSavedTrips] = React.useState<any[]>([]);

  React.useEffect(() => {
    const base = new Airtable({
      apiKey: 'patgSP0oORNHp823P.b044ad99929dae10bdd8499c2897e0552acea192f09dddd23bf096de611039e7'
    }).base('app5W1PLrSDCWkUXx');
  
    base('tblVFNjPi1Tq9xN3d').select({})
      .eachPage(function page(records, fetchNextPage) {
        records.forEach((record) => {
          console.log('Retrieved', record.get('origin'));
        })
        fetchNextPage();
        let savedTripsArr = [];
        savedTripsArr.push(records);
        setSavedTrips(savedTripsArr);

      }, function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    )
  }, [])

  const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 30 },
    {
      field: 'origin',
      headerName: 'Origin',
      width: 120
    }, {
      field: 'destination',
      headerName: 'Destination',
      width: 120
    }, {
      field: 'travellers',
      headerName: 'Travellers',
      width: 50
    }, {
      field: 'fromDate',
      headerName: 'From',
      width: 100
    }, {
      field: 'toDate',
      headerName: 'To',
      width: 100
    }, {
      field: 'flightCost',
      headerName: 'Flight Cost',
      width: 90
    }, {
      field: 'accommsCost',
      headerName: 'Accomms Cost',
      width: 90
    }, {
      field: 'totalCost',
      headerName: 'Total Cost',
      width: 90
    }
  ];

  let rows: any[] = [];
  if (Array.isArray(savedTrips) && savedTrips.length > 0) {
    //@ts-ignore
    rows = savedTrips[0].map((trip, idx) => {
      return {
        id: idx,
        origin: trip.fields.origin,
        destination: trip.fields.destination,
        travellers: trip.fields.travellers,
        fromDate: trip.fields.fromDate,
        toDate: trip.fields.toDate,
        flightCost: trip.fields.flightCost,
        accommsCost: trip.fields.accommsCost,
        totalCost: trip.fields.flightCost + trip.fields.accommsCost
      }
    })
  }

  return (
    <>
      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </Box>
    </>
  )
}