import React from 'react';
import '../style/studentprofile.css';
import StudentCard from '../components/StudentCard';

const studentData = [
  {
    name: 'John Doe',
    photoUrl: 'https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000',
  },
  {
    name: 'Jane Smith',
    photoUrl: 'https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000',
  },
  {
    name: 'John Doe',
    photoUrl: 'https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000',
  },
  {
    name: 'Jane Smith',
    photoUrl: 'https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000',
  },
  {
    name: 'John Doe',
    photoUrl: 'https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000',
  },
  {
    name: 'Jane Smith',
    photoUrl: 'https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000',
  },
  {
    name: 'John Doe',
    photoUrl: 'https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000',
  },
  {
    name: 'Jane Smith',
    photoUrl: 'https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000',
  },
];

class StudentProfile extends React.Component {
  render() {
    return (
      <div style={{display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        margin: '10px'}}>
        {studentData.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    );
  }
}

export default StudentProfile;
