import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { useVerifyMutation, useRejectMutation } from "../slices/adminApislice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PendingStudent  from "./StudentDetails";
import { Link,useNavigate } from "react-router-dom";



const PendingCard = ({ student_company }) => {

  const [verify] = useVerifyMutation();
  const [reject] = useRejectMutation();

  const handleAccept = async (e) => {
    e.preventDefault();
    try {
      console.log(student_company.student_id)
      const res = await verify({ student_id: student_company.student_id }).unwrap();
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
      console.log(student_company.student_id)
      const res = await reject({ student_id: student_company.student_id }).unwrap();
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

  const navigate = useNavigate();

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
        alt={student_company?.name}
        image={student_company?.photoUrl}
      />
      <CardContent className="cardContent">
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {student_company?.name}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {student_company?.student_id}
        </Typography>
        <Button size="medium" variant="contained" onClick={() => navigate(`/getStudent/${student_company?._id}`)}>
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
