import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { AccommsData } from "./SearchBarStore";
import './AccommsResultItem.css'

type AccommsResProps = {
  listing: AccommsData
}

const AccommsResultsItem: React.FC<AccommsResProps> = ({listing}) => {
  return (
    <Card className="AccommsResItem">
      <CardContent>
        <Typography variant="subtitle2">
          {listing.name}
        </Typography>
        <Typography variant="caption">{listing.reviews.score}⭐({listing.reviews.total})</Typography>
        <Typography variant="h6">
          {listing.price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default AccommsResultsItem