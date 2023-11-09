import './App.css';
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
import AddAnnouncementStudent from './pages/AddAnnouncementStudent';
import AddAnnouncementCompany from './pages/AddAnnouncementCompany';
import CompanyAnnouncements from './pages/CompanyAnnouncements';
import PendingStudent from './components/StudentDetails';
import PendingCompany from './components/CompanyDetails';
import JobProfiles from './pages/JobProfiles';
import AboutUs from './pages/AboutUs';

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
            <Route path='/addAnnouncementCompany' element={<AddAnnouncementCompany />} />
            <Route path='/addAnnouncementStudent' element={<AddAnnouncementStudent />} />
            <Route path='/AnnouncementsByCompany' element={<CompanyAnnouncements />} />
            <Route path='/getStudent/:id' element={<PendingStudent />} />
            <Route path='/getCompany/:id' element={<PendingCompany />} />
            <Route path='/jobProfiles' element={<JobProfiles />} />
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/logout' />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );

}

export default App;



