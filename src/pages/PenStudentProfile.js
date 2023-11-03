import React, { useState, useEffect } from "react";
import "../style/studentprofile.css";
import PendingCard from "../components/PendingCardStudent";
import { useVerifyMutation } from "../slices/adminApislice";

function StudentProfile() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [verify] = useVerifyMutation();

  useEffect(() => {
    console.log(localStorage.getItem('token'));
    fetch('http://localhost:8000/api/student/getpenstudent', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
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

  return (
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
      ) : studentData && studentData.length > 0 ? (
        studentData.map((student, index) => (
          <PendingCard key={index} student_company={student} />
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default StudentProfile;
