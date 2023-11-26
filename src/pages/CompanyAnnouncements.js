import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  ListItem,
  ListItemText,
  List,
  Paper,
} from "@mui/material";
import "../style/AnnouncementSection.css";
import { useNavigate } from "react-router-dom";
import { Autocomplete } from "@mui/material";

const AnnouncementSection = ({ title }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [searchInput, setSearchInput] = useState(""); // Add searchInput state
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]); // Add filteredAnnouncements state
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    fetch(
      "https://back-end-production-3140.up.railway.app/api/announcements/admin/companyAnnouncements",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // Filter out announcements with null company
        const validAnnouncements = data.filter(
          (announcement) => announcement.company
        );
        console.log("Valid announcements:", validAnnouncements); // Log valid announcements

        // Extract the unique company IDs from the valid announcements
        const uniqueCompanyIds = [
          ...new Set(
            validAnnouncements.map((announcement) => announcement.company._id)
          ),
        ];
        console.log("Unique company IDs:", uniqueCompanyIds); // Log unique company IDs

        // Fetch company names for each unique company ID
        const fetchCompanyNames = uniqueCompanyIds.map((companyId) =>
          fetch(`https://back-end-production-3140.up.railway.app/api/company/name/${companyId}`, {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          }).then((res) => res.json())
        );

        // Wait for all company name fetches to complete
        Promise.all(fetchCompanyNames).then((companyData) => {
          const companyMap = {};
          companyData.forEach((company) => {
            companyMap[company.company._id] = company.company.companyname; // Access the 'companyname' field
          });

          console.log("Company map:", companyMap); // Log company map

          const announcementsWithCompanyNames = validAnnouncements.map(
            (announcement) => ({
              ...announcement,
              companyName: companyMap[announcement.company._id],
            })
          );

          setAnnouncements(announcementsWithCompanyNames);
          console.log(announcements);
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

  }, []);



  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(announcements);
      return;
    }
    const filtered = announcements.filter((announcements) =>
      announcements.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, announcements]);

  const navigate = useNavigate();

  return (
    <div style={{ position: "relative" }}>
      <Paper sx={{ py: 1, px: 3 }} className="container">
        {/* <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
          Announcements Posted by Companies {title}:
        </Typography> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
              Announcements Posted by companies {title}:
            </Typography>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              margin="normal"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: '100%' }}
            />
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : filteredData && filteredData.length > 0 ? (
          <List className="list">
            {filteredData
              .slice()
              .reverse()
              .map((announcement, index) => (
                <ListItem key={index} className="item">
                  <ListItemText
                    primary={
                      <div>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          {announcement?.companyName}
                        </Typography>
                        <Typography variant="body1">
                          {announcement.title}
                        </Typography>
                      </div>
                    }
                    secondary={
                      <div>
                        <Typography variant="body2">
                          {announcement.description}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontStyle: "italic",
                            textAlign: "right",
                          }}
                          color="text.secondary"
                        >
                          {new Date(announcement.date).toLocaleString()}
                        </Typography>
                      </div>
                    }
                    secondaryTypographyProps={{ variant: "body2" }}
                  />
                </ListItem>
              ))}
          </List>
        ) : (
          <div
            style={{
              minHeight: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ textAlign: "center" }} variant="body1">
              No data to display
            </Typography>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default AnnouncementSection;
