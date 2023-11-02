import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import { PostAdd as PostAddIcon } from '@mui/icons-material';
import '../style/AnnouncementSection.css'

const AnnouncementSection = ({ title }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState('');

  const handleAnnouncementChange = (e) => {
    setAnnouncementText(e.target.value);
  };

  const handleSubmitAnnouncement = () => {
    if (announcementText.trim() !== '') {
      const newAnnouncement = {
        id: new Date().getTime(),
        text: announcementText,
        timestamp: new Date().toLocaleString(),
      };

      setAnnouncements([...announcements, newAnnouncement]);
      setAnnouncementText('');
    }
  };


  return (
    <Paper className="container">
      <Typography variant="h5" className="title">
        {title}:
      </Typography>
      <TextField
        placeholder={`Type your ${title} announcement here...`}
        fullWidth
        multiline
        value={announcementText}
        onChange={handleAnnouncementChange}
        className="input"
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<PostAddIcon />}
        onClick={handleSubmitAnnouncement}
        className="button"
        style={{backgroundColor:'#2B2442'}}
      >
        Post {title} Announcement
      </Button>
      <Divider className="divider" />
      <Typography variant="h6">Posted {title}:</Typography>
      <List className="list">
        {announcements.map((announcement) => (
          <ListItem key={announcement.id} className="item">
            <ListItemIcon className="icon">
              <PostAddIcon />
            </ListItemIcon>
            <ListItemText
              primary={announcement.timestamp}
              secondary={announcement.text}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AnnouncementSection;
