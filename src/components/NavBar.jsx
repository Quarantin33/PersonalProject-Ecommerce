import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/token/tokenSlice";
import logoNav from "../static/img/logoNav.png";
import './NavBar.css';

const style = {
  fontSize: "1.2rem",
  color: "white",
  textDecoration: "none",
  fontFamily: "'Roboto Condensed','san-serif'",
};

const pages = [
  <Link style={style} to="/final-excercise/">
    LogIn
  </Link>,
  <Link style={style} to="/products">
    Products
  </Link>,
  <Link style={style} to="/about-us">
    About us
  </Link>,
];

/* No dejaba poner dentro del menú Links components */
const burguerMenu = ["LogIn", "Products", "About us"];

const settings = ["Profile", "Cart", "Logout"];

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.tokenBox);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    // console.log(e.target.textContent); Burguer menu
    const content = e.target.textContent;

    switch (content) {
      case "LogIn":
        navigate("/final-excercise/");
        break;
      case "Products":
        navigate("/products");
        break;
      case "About us":
        navigate("/about-us");
        break;
      default:
        console.log("ERROR en handleCloseNavMenu");
        break;
    }

    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    // console.log(e.target.textContent)
    const content = e.target.textContent;

    switch (content) {
      case "Profile":
        navigate("/profile");
        break;
      case "Cart":
        navigate("/cart");
        break;
      case "Logout":
        dispatch(logout());
        navigate("/final-excercise/");
        break;
      default:
        console.log("ERROR en handleCloseUserMenu");
        break;
    }
    setAnchorElUser(null);
  };

  // const handleLogOut = () => {
  //   //quitar permisos de login
  //   dispatch(logout());
  //   navigate("/");
  // };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#c95405" }}>
      <Container maxWidth="x1">
        <Toolbar
          disableGutters
          sx={{
            margin: "-7px",
            display: "flex",
            justifyContent: "space-around",
            alignContent: "center",
            height: "50px",
          }}
        >
          <img src={logoNav} alt="logoNav" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: ".8rem",
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto Condensed",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            J&J
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {burguerMenu.map((menu, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{menu}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page, index) => (
              <Button
              
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  // "&:focus": { textDecoration: "underline" },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {token && (
                  <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/originals/ec/68/59/ec6859cb8c8077cf5516e15dad2b522e.jpg"
                  />
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
