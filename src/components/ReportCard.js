import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import logo from "../assets/thislogo.png";
import temp from "../assets/thermometer.png";
export default function ReportCard({ name, val, img, col }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 300,
        minHeight: 200,
        backgroundColor: col,
      }}
    >
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="100"
          image={temp}
          alt="green iguana"
        /> */}

        <CardContent>
          <img src={img} style={{ height: "50px", marginBottom: "10px" }} />
          <Typography gutterBottom variant="h6" component="div">
            <strong>{name}</strong>
          </Typography>
          <Typography variant="h4" color="black">
            <strong>{val}</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
