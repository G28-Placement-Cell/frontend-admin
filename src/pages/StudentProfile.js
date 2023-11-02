import React, { useState } from "react";
import "../style/studentprofile.css";
import PendingCard from "../components/PendingCard";

const studentData = [
  {
    id: "01",
    isRejected: "0",
    name: "John Doe",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "02",
    isRejected: "0",
    name: "Jane Smith",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "03",
    isRejected: "0",
    name: "John Doe",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "04",
    isRejected: "0",
    name: "Jane Smith",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "05",
    isRejected: "0",
    name: "John Doe",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "06",
    isRejected: "0",
    name: "Jane Smith",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "07",
    isRejected: "0",
    name: "John Doe",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "08",
    isRejected: "0",
    name: "Jane Smith",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
];

function StudentProfile() {
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
