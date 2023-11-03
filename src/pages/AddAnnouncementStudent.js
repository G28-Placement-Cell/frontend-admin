import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    Paper,
    Container,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import '../style/AnnouncementSection.css'
// import { AuthContext } from "../context/AuthContext";


const AddAnnouncement = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    // const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        // Create a new announcement object
        const newAnnouncement = {
            title,
            description,
            date: date.toISOString(),
        };

        console.log(newAnnouncement);

        try {
            const res = await fetch("http://localhost:8000/api/announcements/admin/student", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(newAnnouncement),
            });

            const data = await res.json();
            console.log(data);

            if (!res.ok) {
                throw new Error(data.message);
            }

            setLoading(false);
            setSuccess(true);
            setError("");
            navigate("/studentAnnouncements");
        }
        catch (err) {
            setLoading(false);
            setSuccess(false);

            if (err.message) {
                setError(err.message);
            }
            else {
                setError("Something went wrong. Please try again later.");
            }
        }
    }

    return (
        <Paper sx={{ py: 1, px: 3 }} className="container">
            <Typography variant="h4" sx={{ mt: 3 }} align="center" gutterBottom>
                Add Announcement for Student
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    fullWidth
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    margin="normal"
                    required
                />
                <TextField
                    label="Description"
                    fullWidth
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    margin="normal"
                    multiline
                    rows={2}
                    required
                />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button type="submit" variant="contained" color="primary" sx={{ my: 2, width: '15vw' }}>
                        Post Announcement
                    </Button>
                </div>
            </form>
        </Paper>
    );
};


export default AddAnnouncement;