import React, { useState, useEffect } from "react";
import AcceptedCard from "../components/AcceptedCardStudent";

function RegStudentProfile() {
  const [regStudentData, setRegStudentData] = useState([]);

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      {regStudentData && regStudentData.length > 0 ? (
        regStudentData.map((student, index) => (
          <AcceptedCard key={index} student_company={student} />
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default RegStudentProfile;
