import React, { useState } from "react";
import "../style/ChangePassword.css";
import { useChange_passwordMutation } from "../slices/adminApislice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function validatePassword(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
};

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [change_password] = useChange_passwordMutation();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return; // Exit the function without submitting the form
    }
    else if (!validatePassword(newPassword)) {
      toast.error('Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character');
      return;
    }
    try {
      // console.log('ok');
      const res = await change_password({ currentPassword, newPassword, confirmPassword }).unwrap();
      toast.success(res.message);
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      console.log(err);
    }
  };

  return (
    <div className="maincp">
      <div className="change-password-container" style={{ marginBottom: '10px' }}>
        <h2>Change Password</h2>
        <form onSubmit={submitHandler}>


          <div className="password-form">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" style={{ backgroundColor: '#2B2442' }}>Change Password</button>
            {message && <p className="message">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
