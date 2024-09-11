import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "../../../../components/Image/Image";
import FlexBox from "../../../../components/FlexBox/FlexBox";
import Btn from "../../../../components/Btn/Btn";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedValue, setSelectedValue] = useState("");

  const auth = true;

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleLogin = () => {
    setDrawerOpen(false);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const currentPath = location.pathname;

  const isHidden =
  currentPath === "/order-confirm" ||
  currentPath === "/login" ||
  currentPath === "/sign-up" ||
  currentPath === "/email-confirmation-otp";
  if (isHidden) {
    return null;
  }

  const handleMenuItemClick = (value) => {
    if (value === "Logout") {
      // dispatch(logout());
    } else if (value === "My orders") {
      navigate("/my-orders");
    } else if (value === "assembly workshop") {
      navigate("/assemblt-workshop");
    } else if (value === "customer data") {
      navigate("/customer-data");
    }
    setSelectedValue("");
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const menuItems = [
    { label: "Home", route: "/" },
    { label: "Lab Tests", route: "/lab-tests" },
  ];
const handleHome = ()=>{
  navigate('/')
}
  return (
    <Box
      sx={{
        padding: "0.3rem 5%",
        color: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FlexBox sx={{ gap: "1rem" }}>
        <Box onClick={handleHome} sx={{cursor:'pointer'}}>

        <Image src="/logo.png" width={'70%'} />
        </Box>

      </FlexBox>

      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          gap: 3,
          alignItems: "center",
        }}
      >
        {menuItems.map((item, index) => (
          <Typography
            key={index}
            onClick={() => {
              navigate(item.route);
              setDrawerOpen(false);
            }}
            sx={{
              fontSize: "1rem",
              cursor: "pointer",
              color: "black",
              fontWeight:'600',
              ":hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            {item.label}
          </Typography>
        ))}
      </Box>

   <Box>
    {/* empty  */}
   </Box>

      <Box sx={{ display: { xs: "flex", sm: "none" } }}>
        <IconButton onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
          <Box sx={{ width: 250, padding: "20px" }}>
            <IconButton
              onClick={handleDrawerClose}
              sx={{ position: "absolute", top: "10px", right: "10px" }}
            >
              <CloseIcon />
            </IconButton>
            <br />
            <br />

            {menuItems.map((item, index) => (
              <Box key={index}>
                <Typography
                  onClick={() => {
                    navigate(item.route);
                    setDrawerOpen(false);
                  }}
                  sx={{
                    fontSize: "0.9rem",
                    marginBottom: 2,
                    marginTop: 1,
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </Typography>
                {index < menuItems.length - 1 && <Divider />}
              </Box>
            ))}
            <Box sx={{ marginTop: 2 }}>
              {/* <Btn
                onClick={handleLogin}
                variant="contained"
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontSize: "0.9rem",
                  width: "100%",
                }}
              >
                The Checkout
              </Btn> */}
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
