import React, { useState } from "react";
import "../style/studentprofile.css";
import PendingCard from "../components/PendingCard";
import { useEffect } from "react";


function StudentProfile() {

  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(localStorage.getItem('token'));
    fetch('http://localhost:8000/api/student/getpenstudent', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }).then((res) => res.json()).then((data) => {
      console.log(data);
      setStudentData(data.penstudent);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
      setLoading(false);
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
      {studentData.map((student, index) => (
        <PendingCard key={index} student_company={student} />
      ))}
    </div>
  );
}

export default StudentProfile;
