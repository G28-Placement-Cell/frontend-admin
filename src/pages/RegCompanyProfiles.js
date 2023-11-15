import AcceptedCard from "../components/AcceptedCardCompany";
import React, { useState, useEffect } from "react";
import { Paper, Typography, TextField } from "@mui/material";
import "../style/studentprofile.css";

function RegCompanyProfile() {
  const [regCompanyData, setRegCompanyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://back-end-production-ee2f.up.railway.app/api/company/getregcompany", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRegCompanyData(data.company);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter the data based on the search term
    const filtered = regCompanyData.filter((company) =>
      company.companyname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, regCompanyData]);

  return (
    <Paper sx={{ py: 1, px: 3 }} className="container" >
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
          filteredData.map((company, index) => (
            <AcceptedCard key={index} student_company={company} />
          ))
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
            <Typography variant="h6">No registered company profiles</Typography>
          </div>
        )}
      </div>
    </Paper>
  );
}

// {loading ? ( // Display a loading message while loading
//           <p>Loading...</p>
//         ) : filteredData && filteredData.length > 0 ? (
//           filteredData.map((student, index) => (
//             <AcceptedCard key={index} student_company={student} />
//           ))
//         ) : (
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
//             <Typography variant="h6">No matching profiles found</Typography>
//           </div>
//         )}

export default RegCompanyProfile;
