import AcceptedCard from "../components/AcceptedCardCompany";
import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import "../style/studentprofile.css";

function RegCompanyProfile() {
  const [regCompanyData, setRegCompanyData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/company/getregcompany", {
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
      })
      .catch((err) => {
        console.log(err);
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
        {regCompanyData && regCompanyData.length > 0 ? (
          regCompanyData.map((company, index) => (
            <AcceptedCard key={index} student_company={company} />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </Paper>
  );
}

export default RegCompanyProfile;
