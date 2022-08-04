import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const AboutGrid = ({ name, description, img }) => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: '#f1f3f5',
        boxShadow: '9px 9px 7px -1px #495057'
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase
            sx={{
              width: 128,
              height: 128,
            }}
          >
            <Img
              alt="complex"
              src={img}
              sx={{ border: "2.5px solid #adb5bd", borderRadius: "50%" }}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item container direction="column" spacing={0}>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary" sx={{color: 'black', fontFamily: 'Roboto Condensed', fontWeight: '500'}}>
                {name}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" color="text.secondary" sx={{color: '#343a40', fontFamily: 'Roboto Condensed'}}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutGrid;
