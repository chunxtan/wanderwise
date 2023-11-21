import React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { AccommsData } from "./SearchBarStore";
import './AccommsResultsItem.css'
import ResContStoreInstance from "./ResultsContainerStore";
import { observer } from "mobx-react";

type AccommsResProps = {
  listing: AccommsData
}

const AccommsResultsItem: React.FC<AccommsResProps> = observer(({ listing }) => {
  const resStore = ResContStoreInstance;

  const handleClick = () => {
    if (resStore.accommsSelId !== listing.id) {
      resStore.setAccommsSelId(listing.id);
    } else {
      resStore.setAccommsSelId(null);
    }
  }

  return (
    <Card 
      className="AccommsResItem"
      sx={{ 
        backgroundColor: resStore.accommsSelId === listing.id ? 'primary.main' : 'white', 
        color: resStore.accommsSelId === listing.id ? 'white' : 'text.primary'
      }}>
      <CardActionArea onClick={() => handleClick()}>
        <CardContent>
          <Typography variant="subtitle2">
            {listing.name}
          </Typography>
          <Typography variant="caption">{listing.reviews.score}⭐({listing.reviews.total})</Typography>
          <Typography variant="h6">
            {listing.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
})

export default AccommsResultsItem