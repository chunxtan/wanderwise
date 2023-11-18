import React from "react";
import { SearchBarStoreInstance } from "./SearchBarStore";
import AccommsResultsItem from "./AccommsResultItem";
import { AccommsData } from "./SearchBarStore";
import { observer } from 'mobx-react';

const AccommsResults: React.FC = observer(() => {
  const store = SearchBarStoreInstance;

  return (
    store.accommsData.map((listing: AccommsData) => {
      return <AccommsResultsItem key={listing.id} listing={listing} />
    })
  )
})

export default AccommsResults;