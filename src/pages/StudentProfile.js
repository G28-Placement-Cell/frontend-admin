import React from 'react';
import '../style/studentprofile.css'
import StudentCard from '../components/StudentCard';

const studentData = {
  name: 'John Doe',
  photoUrl: 'https://img.freepik.com/premium-photo/young-student-caucasian-woman-isolated-white-background-pointing-side-present-product_1368-289762.jpg?w=2000',
};

class StudentProfile extends React.Component {

    render() { 
        return (
          <>
            <StudentCard student={studentData}/>
          </>
        );
    }
}
 
export default StudentProfile;