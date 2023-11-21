import React from 'react';
import { SearchBarStoreInstance } from './SearchBarStore';
import FlightsResultsItem from './FlightsResultsItem';
import { observer } from 'mobx-react';

const FlightsResults: React.FC = observer(() => {
  return (
    SearchBarStoreInstance.flightsData.map(data => {
      return (
        <FlightsResultsItem key={data.id} flightsData={data} />
      )
    })
  )
})

export default FlightsResults