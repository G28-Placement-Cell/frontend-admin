import './App.css';
import { Head } from './previous/Head';
import { Job } from './previous/Job';
import DataGrid from 'react-data-grid';
import { Tablet } from './pages/Tablet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import StudentProfile from './pages/PenStudentProfile';
import AnnouncementSectionStudent from './pages/AnnouncementSectionStudent';
import AnnouncementSectionCompany from './pages/AnnouncementSectionCompany';
import ChangePassword from './pages/ChangePassword';
import RegStudentProfile from './pages/RegStudentProfile';
import PenCompanyProfile from './pages/PenCompanyProfile';
import AdminLogin from './pages/AdminLogin';
import { ToastContainer } from 'react-toastify';
import RegCompanyProfile from './pages/RegCompanyProfiles';
import AddAnnouncement from './pages/AddAnnouncement';

function App() {

  return (
    <>
      <Router>
        <Header />
        <div style={{ minHeight: '84vh' }}>
          <ToastContainer />
          <Routes>
            <Route path='/' element={<AdminLogin />} />
            <Route path='/PenstudentProfiles' element={<StudentProfile />} />
            <Route path='/RegstudentProfiles' element={<RegStudentProfile />} />
            <Route path='/PencompanyProfiles' element={<PenCompanyProfile />} />
            <Route path='/RegcompanyProfiles' element={<RegCompanyProfile />} />
            <Route path='/StudentAnnouncements' element={<AnnouncementSectionStudent />} />
            <Route path='/CompanyAnnouncements' element={<AnnouncementSectionCompany />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/addAnnouncement' element={<AddAnnouncement />} />
            <Route path='/logout' />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );

}

export default App;



