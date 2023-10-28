import AcceptedCard from "../components/AcceptedCard";
import React, { useState } from "react";
import "../style/studentprofile.css";

const regCompanyData = [

];


function regCompanyProfile() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {companyData.map((company, index) => (
          <AcceptedCard
            key={index}
            student_company={company}
          />
        ))}
      </div>
    );
  }
  
  export default regCompanyProfile;
  