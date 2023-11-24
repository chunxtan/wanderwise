import React from "react";
import { SearchBarStoreInstance } from "./SearchBarStore";
import AccommsResultsItem from "./AccommsResultsItem";
import { AccommsData } from "./SearchBarStore";
import { observer } from 'mobx-react';

const AccommsResults: React.FC = observer(() => {
  const store = SearchBarStoreInstance;

  return (
    store.accommsData.map((listing: AccommsData, idx: number) => {
      return <AccommsResultsItem key={idx} listing={listing} />
    })
  )
})

export default AccommsResults;