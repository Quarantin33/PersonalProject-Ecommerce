import React, { useRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const CardProduct = ({id, image, title, price}) => {

  const btnRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    const sufixUrl = `${location.pathname}/${btnRef.current.id}`
    // products/id
    // console.log(sufixUrl);

    navigate(sufixUrl);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          image={image}
          alt={title}
        />
        <CardContent sx={{height: 130}}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick} id={id} ref={btnRef}>
          VIEW DETAILS...
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardProduct;