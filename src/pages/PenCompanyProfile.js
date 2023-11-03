import React from "react";
import { useState, useEffect } from "react";
import "../style/studentprofile.css";
import PendingCard from "../components/PendingCardCompany";
import { Paper } from "@mui/material";



function PenCompanyProfile() {
  const [companyData, setCompanyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/company/getpencompany", {
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
      ) : companyData.map((company, index) => (
        <PendingCard key={index} student_company={company} />
      ))}
    </div>
    </Paper>
  );
}

export default PenCompanyProfile;