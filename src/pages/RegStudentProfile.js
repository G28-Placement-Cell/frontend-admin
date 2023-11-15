import React, { useState, useEffect } from "react";
import AcceptedCard from "../components/AcceptedCardStudent";
import { Paper, Typography, TextField } from "@mui/material";

function RegStudentProfile() {
  const [regStudentData, setRegStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://back-end-production-ee2f.up.railway.app/api/student/getregstudent", {
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

  useEffect(() => {
    // Filter the data based on the search term
    const filtered = regStudentData.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.student_id.toLowerCase().includes(searchTerm.toLowerCase())

    );
    setFilteredData(filtered);
  }, [searchTerm, regStudentData]);

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
        {loading ? ( // Display a loading message while loading
          <p>Loading...</p>
        ) : filteredData && filteredData.length > 0 ? (
          filteredData.map((student, index) => (
            <AcceptedCard key={index} student_company={student} />
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

export default RegStudentProfile;
