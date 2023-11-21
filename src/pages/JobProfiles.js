const React = require("react");

const { useState, useEffect } = require("react");
const {
  Typography,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemText,
  Fab,
} = require("@mui/material");
const { Link, useNavigate } = require("react-router-dom");

const JobProfiles = () => {
  const [jobProfiles, setJobProfiles] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const companyInfoJSON = localStorage.getItem('companyInfo');
  const companyInfo = JSON.parse(companyInfoJSON);
  const _id = companyInfo?._id;
  useEffect(() => {
    fetch("https://back-end-production-3140.up.railway.app/api/jobprofile", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token") || "",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobProfiles(data.jobProfiles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Simulate loading for 2 seconds (you should replace this with your actual data fetching code)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // useEffect(() => {
  // // Filter the data based on the search term
  // const filtered = jobProfiles.filter((student) =>
  // // student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  // // student.student_id.toLowerCase().includes(searchTerm.toLowerCase())

  // );
  // setFilteredData(filtered);
  // }, [searchTerm]);
  const navigate = useNavigate();
  const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(jobProfiles);
      return;
    }
    const filtered = jobProfiles.filter((jobProfiles) =>
      jobProfiles.company_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, jobProfiles]);

  return (
    <div style={{ position: "relative" }}>
      <Paper sx={{ py: 1, px: 3 }} className="container">
        <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
          Job Profiles Posted by Companies:
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {loading ? (
          <p>Loading...</p>
        ) : filteredData && filteredData.length > 0 ? (
          <List className="list">
            {filteredData
              .slice() // Create a shallow copy of the array
              .reverse() // Reverse the order of announcements
              .map((jobProfile, index) => (
                <ListItem key={index} className="item">
                  <ListItemText
                    primary={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>{jobProfile.title}</Typography>
                      </div>
                    }
                    secondary={
                      <div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Company Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.company_name}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Type (Job/SI)</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.offer_type}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Location</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.location}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">CPI Criteria</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.cpi_criteria}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Open For</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.open_for}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Company Type</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.company_type}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Registration Starts from</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {new Date(jobProfile.registration_start_date).toLocaleDateString('en-GB', options)}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Registration Closes at</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {new Date(jobProfile.registration_end_date).toLocaleDateString('en-GB', options)}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">CTC</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.ctc}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Stipend</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.stipend}
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <h6 className="mb-0">Description</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                              {jobProfile.job_description}
                            </div>
                          </div>
                          <hr />
                        </div>
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontStyle: "italic",
                            textAlign: "right",
                          }}
                          color="text.secondary"
                        >
                          {new Date(
                            jobProfile.registration_start_date
                          ).toLocaleString()}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 12,
                            fontStyle: "italic",
                            textAlign: "right",
                          }}
                          color="text.secondary"
                        >
                          <div
                            // style={{
                            //   display: "flex",
                            //   justifyContent: "flex-end",
                            //   alignItems: "flex-end",
                            //   marginTop: "10px",
                            //   // gap:'10px'
                            // }}
                            className="row"
                            style={{width:'100%'}}
                          >
                            <div className="col-sm-3 ml-auto">
                              <button onClick={() => navigate(`/seeregistered/${jobProfile._id}`)}
                                style={{ backgroundColor: '#2B2442', borderRadius: '5px' }}>
                                See registered students
                              </button>
                            </div>
                            <div className="col-sm-3 ml-auto">
                              <Link to={`/editpost/${jobProfile.id}`}>
                                {/* {<button
                                  variant="contained"
                                  style={{
                                    backgroundColor: "#2B2442",
                                    // width: "200px",
                                    // marginLeft: "15px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  Edit the profile
                                </button>} */}
                              </Link>
                            </div>
                          </div>
                        </Typography>
                      </div>
                    }
                    secondaryTypographyProps={{ variant: "body2" }} // Customize secondary text style
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

export default JobProfiles;
