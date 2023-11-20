import React, { useState, useEffect } from "react";
import "../style/studentprofile.css";
import PendingCard from "../components/PendingCardCompany";
import { Paper, Typography, TextField } from "@mui/material";

function PenCompanyProfile() {
  const [companyData, setCompanyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://back-end-production-3140.up.railway.app/api/company/getpencompany", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCompanyData(data.company);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  useEffect(() => {
    // Filter the data based on the search term
    const filtered = companyData.filter((company) =>
      company.companyname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, companyData]);

  return (
    <Paper sx={{ py: 1, px: 3 }} className="container">
      <Typography variant="h4" style={{ textAlign: "center", mt: 2, mb: 1 }}>
        Pending Companies
      </Typography>
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
        ) : companyData.length === 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
            <Typography variant="h6">No pending company profiles</Typography>
          </div>
        ) : (
          filteredData.map((company, index) => (
            <PendingCard key={index} student_company={company} />
          ))
        )}
      </div>
    </Paper>
  );
}

export default PenCompanyProfile;
