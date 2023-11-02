import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from '@mui/material/Stack';
import { ButtonGroup } from "@mui/material";

const buttons = [
  <Button key="MoreInfo">More Info</Button>,
  <Button key="Remove">Remove</Button>,
];

const AcceptedCard = ({ student_company }) => {
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
          variant="h6"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {student_company.name}
        </Typography>
        {/* <ButtonGroup
          size="small"
          variant="contained"
          style={{ marginTop: "5px", marginLeft: "10px" }}
        >
          {buttons}
        </ButtonGroup> */}

        <Button size="medium" variant="contained">
          More Info
        </Button>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon />
        </IconButton>

      </CardContent>
    </Card>
  );
};

export default AcceptedCard;
