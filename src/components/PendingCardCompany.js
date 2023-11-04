import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { useVerifycompMutation, useRejectcompMutation } from "../slices/adminApislice";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const PendingCard = ({ student_company }) => {
  console.log(student_company)

  const [verify] = useVerifycompMutation();
  const [reject] = useRejectcompMutation();

  const handleAccept = async (e) => {
    e.preventDefault();
    try {
      console.log(student_company.email)
      const res = await verify({ email: student_company.email }).unwrap();
      console.log(res);
      console.log("Accept");
    }
    catch (err) {
      console.log(err);
      toast.error(err?.data?.message || err.error)
    }
  }


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

  const buttons = [
    <Button onClick={handleAccept} key="accept">Accept</Button>,
    <Button onClick={handleReject} key="reject">Reject</Button>,
  ];

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
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {student_company.hrname}
        </Typography>
        <Button variant="contained" color="primary">
        <Link to={`/getCompany/${student_company?._id}`} style={{textDecoration:'none',color:'white'}} >More Info</Link>
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
