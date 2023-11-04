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
import { useVerifycompMutation, useRejectcompMutation } from "../slices/adminApislice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const AcceptedCard = ({ student_company }) => {

  const [reject] = useRejectcompMutation();
  const handleReject = async (e) => {
    e.preventDefault();
    try {
      console.log(student_company.email)
      const res = await reject({ email: student_company.email }).unwrap();
      console.log(res);
      console.log("reject");
    }
    catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error)
    }
  }

  // const buttons = [
  //   <Button key="MoreInfo">More Info</Button>,
  //   <Button onClick={handleReject} key="Remove">Remove</Button>,
  // ];

  return (
    <Card
      sx={{
        maxWidth: 230,
        m: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "secondary.contrastText",
        color: "secondary.main",
        // boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        // borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        alt={student_company.companyname}
        image={student_company.photoUrl}
      />
      <CardContent className="cardContent">
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {student_company.companyname}
        </Typography>
        {/* <ButtonGroup
          size="small"
          variant="contained"
          style={{ marginTop: "5px", marginLeft: "10px" }}
        >
          {buttons}
        </ButtonGroup> */}

        <Button size="medium" variant="contained">
        <Link to={`/getCompany/${student_company?._id}`} style={{textDecoration:'none',color:'white'}} >More Info</Link>
        </Button>
        <IconButton onClick={handleReject} aria-label="delete" size="small">
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default AcceptedCard;
