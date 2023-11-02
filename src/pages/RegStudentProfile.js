import React from "react";
import AcceptedCard from "../components/AcceptedCard";

const regStudentData = [

];


function regStudentProfile() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {regStudentData.map((student, index) => (
          <AcceptedCard key={index} student_company={student} />
        ))}
      </div>
    );
  }
  
  export default regStudentProfile;