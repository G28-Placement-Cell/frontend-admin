import React, { useState, useEffect } from "react";
import AcceptedCard from "../components/AcceptedCardStudent";
import { Paper } from "@mui/material";

function RegStudentProfile() {
  const [regStudentData, setRegStudentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/student/getregstudent", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRegStudentData(data.regstudent);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <Paper sx={{ py: 1, px: 3 }} className="container" >

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {loading ? ( // Display a loading message while loading
          <p>Loading...</p>
        ) : regStudentData && regStudentData.length > 0 ? (
          regStudentData.map((student, index) => (
            <AcceptedCard key={index} student_company={student} />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </Paper>
  );
}

export default RegStudentProfile;
