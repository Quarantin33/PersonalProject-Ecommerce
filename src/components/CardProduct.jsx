import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getProduct } from "../store/slices/cart/thunk";
import { useDispatch } from "react-redux";

const CardProduct = ({ id, image, title, price }) => {
  const btnRef = useRef();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const sufixUrl = `${location.pathname}/${btnRef.current.id}`;
    // products/id
    // console.log(sufixUrl);

    navigate(sufixUrl);
  };

  const handleAddCart = (e) => {
    const idProduct = btnRef.current.id;
    console.log(btnRef.current.id)
    dispatch( getProduct(idProduct) );

  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        "&:hover": {
          bgcolor: "#ffc078",
          transition: "0.5s",
          transform: "scale(1.05,1.05)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="270" image={image} alt={title} />
        <CardContent sx={{ height: 130 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#c95405",
            "&:hover": {
              bgcolor: "#fd7e14",
              transition: "0.5s",
              transform: "scale(1.05,1.2)",
            },
          }}
          onClick={handleClick}
          id={id}
          ref={btnRef}
        >
          VIEW DETAILS...
        </Button>
        <IconButton
          size="large"
          aria-label="add to shopping cart"
          onClick={(e) => handleAddCart(e)}
        >
          <AddShoppingCartIcon
          id={id}
          ref={btnRef}
          color="secondary"
            sx={{ "&:hover": { transform: "scale(1.3)", transition: "0.5s" } }}
          />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
