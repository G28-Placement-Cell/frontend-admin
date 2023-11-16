import React, { useState, useEffect } from "react";
import "../style/studentprofile.css";
import PendingCard from "../components/PendingCardStudent";
import { useVerifyMutation } from "../slices/adminApislice";
import { Paper, Typography, TextField } from "@mui/material";

function StudentProfile() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [verify] = useVerifyMutation();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://back-end-production-ee2f.up.railway.app/api/student/getpenstudent", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStudentData(data.penstudent);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log(studentData)
  useEffect(() => {
    // Filter the data based on the search term
    const filtered = studentData.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.student_id.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, studentData]);

  return (
    <Paper sx={{ py: 1, px: 3 }} className="container">
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((student, index) => (
            <PendingCard key={index} student_company={student} />
          ))
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
            <Typography variant="h6">No matching profiles found</Typography>
          </div>
        )}
      </div>
    </Paper>
  );
}

export default StudentProfile;
