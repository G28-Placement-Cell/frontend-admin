import React, { useState } from 'react';
import '../style/Announcement.css'


const AnnouncementPage = () => {
  const [studentAnnouncements, setStudentAnnouncements] = useState([]);
  const [companyAnnouncements, setCompanyAnnouncements] = useState([]);
  const [studentAnnouncementText, setStudentAnnouncementText] = useState('');
  const [companyAnnouncementText, setCompanyAnnouncementText] = useState('');

  const handleStudentAnnouncementChange = (e) => {
    setStudentAnnouncementText(e.target.value);
  };

  const handleCompanyAnnouncementChange = (e) => {
    setCompanyAnnouncementText(e.target.value);
  };

  const handleSubmitStudentAnnouncement = () => {
    if (studentAnnouncementText.trim() !== '') {
      const newStudentAnnouncement = {
        id: new Date().getTime(),
        text: studentAnnouncementText,
        timestamp: new Date().toLocaleString(),
      };

      setStudentAnnouncements([...studentAnnouncements, newStudentAnnouncement]);
      setStudentAnnouncementText('');
    }
  };

  const handleSubmitCompanyAnnouncement = () => {
    if (companyAnnouncementText.trim() !== '') {
      const newCompanyAnnouncement = {
        id: new Date().getTime(),
        text: companyAnnouncementText,
        timestamp: new Date().toLocaleString(),
      };

      setCompanyAnnouncements([...companyAnnouncements, newCompanyAnnouncement]);
      setCompanyAnnouncementText('');
    }
  };

  return (
    <div className="announcement-page">
      <div className="announcement-container student-container">
        <h2>Student Announcements:</h2>
        <textarea
          placeholder="Type your student announcement here..."
          value={studentAnnouncementText}
          onChange={handleStudentAnnouncementChange}
        ></textarea>
        <button onClick={handleSubmitStudentAnnouncement}>
          Post Student Announcement
        </button>
        <ul>
          {studentAnnouncements.map((announcement) => (
            <li key={announcement.id}>
              <strong>{announcement.timestamp}:</strong> {announcement.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="announcement-container company-container">
        <h2>Company Announcements:</h2>
        <textarea
          placeholder="Type your company announcement here..."
          value={companyAnnouncementText}
          onChange={handleCompanyAnnouncementChange}
        ></textarea>
        <button onClick={handleSubmitCompanyAnnouncement}>
          Post Company Announcement
        </button>
        <ul>
          {companyAnnouncements.map((announcement) => (
            <li key={announcement.id}>
              <strong>{announcement.timestamp}:</strong> {announcement.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnnouncementPage;
