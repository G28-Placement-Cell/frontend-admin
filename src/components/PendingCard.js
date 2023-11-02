import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

const buttons = [
  <Button key="accept">Accept</Button>,
  <Button key="reject">Reject</Button>,
];

const PendingCard = ({ student_company }) => {

  return (
    <Card
      sx={{
        maxWidth: 230,
        m: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        alt={student_company.name}
        image={student_company.photoUrl}
      />
      <CardContent className="cardContent">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {student_company.student_id}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {student_company.name}
        </Typography>
        <Button variant="contained" color="primary">
          More Info
        </Button>
        <ButtonGroup
          size="medium"
          variant="outlined"
          style={{ marginTop: "5px", marginLeft: "10px" }}
        >
          {buttons}
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

export default PendingCard;
