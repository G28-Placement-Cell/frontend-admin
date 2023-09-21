import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const StudentCard = ({ student }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        alt={student.name}
        image={student.photoUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {student.name}
        </Typography>
        <Button variant="contained" color="primary">
          More Info
        </Button>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
