import React from "react";
import "./ProfileDetails.css";
import { useSelector } from "react-redux";
import { Box, Button, Grid, TextField } from "@mui/material";
import Swal from "sweetalert2";

const ProfileDetails = () => {
  const { user } = useSelector((state) => state.userBox);
  const inputs = ["Fullname", "Email", "Phone", "Password"];
  const fullName = `${user.name.firstname.toUpperCase()} ${user.name.lastname.toUpperCase()}`;
  const email = user.email;
  // const username = user.username;
  const phone = user.phone;
  const password = user.password;

  let values = [fullName, email, phone, password];

  const handleClick = () => {
    console.log("click en btn");
    Swal.fire({
      icon: "success",
      title: "Update successfully",
      text: "Profile updated!",
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}
        sx={{ padding: 2 }}
      >
        <Grid item xs={12}>
          <div className="container">
            <div className="avatar-flip">
              <img
                src="https://i.pinimg.com/originals/ec/68/59/ec6859cb8c8077cf5516e15dad2b522e.jpg"
                height="150"
                width="150"
                alt="img2"
              />
            </div>
            <div className="inputs">
              {inputs.map((elem, index) =>
                elem === "Password" ? (
                  <TextField
                    key={index}
                    margin="dense"
                    type="password"
                    color="secondary"
                    value={values[index]}
                    label={elem}
                  />
                ) : (
                  <TextField
                    key={index}
                    name="text"
                    type="text"
                    margin="dense"
                    value={values[index]}
                    color="secondary"
                    label={elem}
                  />
                )
              )}
              <div>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mt: "8px",
                    height: "40px",
                    width: "61%",
                    backgroundColor: "#c95405",
                    "&:hover": {
                      bgcolor: "#fd7e14",
                    },
                  }}
                  onClick={handleClick}
                >
                  UPDATE
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDetails;
