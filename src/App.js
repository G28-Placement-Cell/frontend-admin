import './App.css';
import { Head } from './previous/Head';
import { Job } from './previous/Job';
import DataGrid from 'react-data-grid';
import { Tablet } from './pages/Tablet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer'; 
import Header from './components/Header';
import StudentProfile from './pages/StudentProfile';
import AnnouncementSection from './pages/AnnouncementSection';
import ChangePassword from './pages/ChangePassword';
import RegStudentProfile from './pages/RegStudentProfile';
import PenCompanyProfile from './pages/PenCompanyProfile';
function App() {
  
  return (
    <>
        <Router>
           <Header />
           <div style={{minHeight:'84vh'}}>
          <Routes>
            <Route path='/PenstudentProfiles' element = {<StudentProfile/>} />
            <Route path='/RegstudentProfiles' element = {<RegStudentProfile/>} />
            <Route path='/PencompanyProfiles' element = {<PenCompanyProfile/>}/>
            <Route path='/StudentAnnouncements' element = {<AnnouncementSection/>} />
            <Route path='/CompanyAnnouncements' element = {<AnnouncementSection/>} />
            <Route path='/changepassword' element={<ChangePassword/>} />
            <Route path='/logout'  />
          </Routes>
          </div>
          <Footer />
        </Router>
    </>
   );

}

export default App;



