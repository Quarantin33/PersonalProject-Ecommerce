import { Box, Grid } from "@mui/material";
import React from "react";
import AboutGrid from "../components/AboutGrid";
import AddressMap from "../components/AddressMap";
import josiasImg from "../static/img/josiasImg.jpeg";
import juanImg from "../static/img/juanImg.jpg";

const AboutUs = () => {
  const josias = {
    name: 'Josias Pazzelli',
    img: josiasImg,
    description: "Satisfecho por haber completado el desafio de React de la AYI Academy."
  };

  const juan = {
    name: 'Juan Ignacio Caballero',
    img: juanImg,
    description: "Agradecido de haber participado del módulo React de la AYI Academy."
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "-65px",
      }}
    >
      <Grid
        container
        columnSpacing={{ xs: 0.5, sm: 1, md: 2 }}
        sx={{ padding: 2, mt: "35px" }}
      >
        <Grid
        item
          container
          xs={6}
          spacing={0}
          sx={{marginTop: "0px"}}
          direction="row"
          alignItems="self-end"
        >
          <Grid item xs={12} >
            <AboutGrid name={josias.name} description={josias.description} img={josias.img}/>
          </Grid>
          <Grid item xs={12} sx={{marginTop: '-60px' ,paddingBottom: '50px'}}>
            <AboutGrid name={juan.name} description={juan.description} img={juan.img}/>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <AddressMap />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
