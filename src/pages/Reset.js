import React, { useState } from 'react';
import "../style/ChangePassword.css";
// import { useChange_passwordMutation, useLogoutMutation } from '../slices/student/studentApislice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../slices/student/authslice';
import { useNavigate } from 'react-router-dom';
import { useReset_passwordMutation, useReset_applyMutation } from '../slices/adminApislice';
import { removeReset } from "../slices/authslice";


function ResetPassword() {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const [reset_apply] = useReset_applyMutation();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // console.log('ok');
      const resetId = localStorage.getItem('resetId');
      console.log(resetId);
      const res = await reset_apply({ otp, password, resetId }).unwrap();
      dispatch(removeReset());
      toast.success(res.message);
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      console.log(err);
    }
  };

  return (
    <div className="maincp" style={{ marginTop: 0, paddingTop: '20px' }}>
      <div className="change-password-container">
        <h2>Reset Password</h2>
        <form id='uploadForm' onSubmit={submitHandler}>

          <div className="password-form">
            <label htmlFor="currentPassword">Enter OTP</label>
            <input
              //   type="password"
              id="otp"
              required
              // value={currentPassword}
              onChange={(e) => setOtp(e.target.value)}
            />
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              // value={newPassword}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              required
              // value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Reset Password</button>
            {message && <p className="message">{message}</p>}
          </div>
        </form>
      </div>
    </div >

  );
}

export default ResetPassword;