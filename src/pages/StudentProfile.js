import React, { useState } from "react";
import "../style/studentprofile.css";
import StudentCard from "../components/StudentCard";

const studentData = [
  {
    id: "01",
    isRejected : "0",
    name: "John Doe",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "02",
    isRejected : "0",
    name: "Jane Smith",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "03",
    isRejected : "0",
    name: "John Doe",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "04",
    isRejected : "0",
    name: "Jane Smith",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "05",
    isRejected : "0",
    name: "John Doe",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "06",
    isRejected : "0",
    name: "Jane Smith",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "07",
    isRejected : "0",
    name: "John Doe",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
  {
    id: "08",
    isRejected : "0",
    name: "Jane Smith",
    photoUrl:
      "https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000",
  },
];

// class StudentProfile extends React.Component {
//   render() {
//     return (
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           margin: "10px",
//         }}
//       >
//         {studentData.map((student, index) => (
//           <StudentCard key={index} student={student} />
//         ))}
//       </div>
//     );
//   }
// }

// export default StudentProfile;

function StudentProfile() {
  // const [students, setStudents] = useState(
  //   studentData
  // );
  // const [regStudents, setRegStudents] = useState([]);

  // const handleAccept = (student) => {
  //   // Remove the student from the student profile list
  //   const updatedStudents = students.filter((s) => s.id !== student.id);

  //   // Add the student to the registered student list
  //   setStudents(updatedStudents);
  //   setRegStudents([regStudents, student]);
  // };

  // const handleReject = (student) => {
  //   // Remove the student from the student profile list
  //   student.isRejected = "1";
  //   const updatedStudents = students.filter((s) => s.isRejected!="1");
  //   setStudents(updatedStudents);
  // };

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
        <StudentCard
          key={index}
          student={student}
          // onAccept={handleAccept}
          // onReject={handleReject}
        />
      ))}
    </div>
  );
}

export default StudentProfile;
