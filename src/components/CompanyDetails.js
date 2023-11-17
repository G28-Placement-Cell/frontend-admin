import React from 'react';
import '../style/studentprofile.css';
import { Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function PendingCompany() {



    const { id } = useParams();
    console.log(id);

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };

    const [company, setCompany] = useState({});//student object
    const [loading, setLoading] = useState(true);//loading state

    useEffect(() => {
        console.log(localStorage.getItem('token'));
        fetch(`https://back-end-production-3140.up.railway.app/api/admin/getCompany/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        }).then((res) => res.json()).then((data) => {
            console.log(data);
            setCompany(data.company);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }, []);

    //   const handleclick = async () => {
    //     // const studentid = localStorage.getItem('studentinfo.student_id');
    //     const fileid = student_company?.resume;
    //     // const res = await axios.get(`https://back-end-production-3140.up.railway.app/api/student/files/${fileid}`, {
    //     //   headers: {
    //     //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    //     //   },
    //     // });
    //     // console.log(res);
    //     window.open(`https://back-end-production-3140.up.railway.app/api/student/files/${fileid}`);
    //   }

    if (!company) return <>loading</>
    console.log(company);
    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                padding: "5vh 5vw",

            }}
        >
            <Paper sx={{ py: 1, px: 3, width: '90vw' }} className="container1">
                <div className="card-body">

                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center text-center" style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                            <div className="mt-3">
                                <h4>{company?.companyname}</h4>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Company Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {company?.companyname}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Contact</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {company?.contact}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {company?.email}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Location</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {company?.address}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">HR Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {company?.hrname}
                        </div>
                    </div>
                    <hr />
                    {/* <div className="row">
                        <div className="col-sm-3">
                            <h6 className="mb-0">Company Type</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                            {company?.company_type}
                        </div>
                    </div>
                    <hr /> */}
                </div>
            </Paper>
        </div>
    );
}

export default PendingCompany;