import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from '@mui/material/Stack';
import { ButtonGroup, Divider } from "@mui/material";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRejectMutation } from "../slices/adminApislice";
import PendingStudent from "./StudentDetails";
import { Link, useNavigate } from "react-router-dom";

const AcceptedCard = ({ student_company }) => {

  const [reject] = useRejectMutation();

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
  let url;
  if (student_company?.profile_pic === undefined) {
    url = 'https://bootdey.com/img/Content/avatar/avatar7.png';
  }
  else {
    const profilepic = student_company?.profile_pic;
    url = `https://back-end-production-3140.up.railway.app/api/student/files/profilepic/${profilepic}`
  }

  console.log(student_company)
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
        boxShadow: "10px 10px 10px 0 rgba(0,0,0,0.2)",
        // borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        width="180"
        alt={student_company.name}
        // image={student_company.photoUrl}
        image={url}
      // {student && profilefileid && <img src={`http://localhost:8000/api/student/files/profilepic/${profilefileid}`} alt="Admin" className="rounded-circle" width={150} height={150} />}
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
        <Divider />
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
        <IconButton onClick={handleReject} aria-label="delete" size="small">
          <DeleteIcon />
        </IconButton>

      </CardContent>
    </Card>
  );
};

export default AcceptedCard;
