import {
  Box,
  Button,
  Divider,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const CustomTextField = styled(TextField)({
  width: "100%",

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#b5c7bc",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#a2c0ad",
      borderRadius: "10px",
    },
    "&.Mui-focused fieldset": {
      borderRadius: "10px",

      borderColor: "#a2c0ad",
    },
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",

    color: "black",
  },
  "& .MuiInputBase-input": {
    borderRadius: "10px",

    color: "black",
  },
  "& .MuiInputLabel-root": {
    borderRadius: "10px",

    color: "white",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    fontSize: "0.9rem",
    color: "gray",

    opacity: 1, // Ensure the placeholder is fully opaque
  },
});

const DiscountTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "green",
      borderRadius: "8px",
      size: "small",
    },
    "&:hover fieldset": {
      borderColor: "green",
      borderRadius: "8px",
    },
    "&.Mui-focused fieldset": {
      borderRadius: "8px",

      borderColor: "green",
    },
    backgroundColor: "white",
    borderRadius: "8px",

    color: "black",
  },
  "& .MuiInputBase-input": {
    borderRadius: "8px",
    textAlign: "center",
    color: "black",
  },
  "& .MuiInputLabel-root": {
    borderRadius: "8px",

    color: "white",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "black",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    fontSize: "1.1rem",
    color: "green",
    textAlign: "center",
    opacity: 1,
  },
});

const ShoppingCartProduct = () => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const cartitem = useSelector((state)=>state.cartItem)
  // console.log('sfddsfdsfs', cartitem)

  const calculateTotal = () => {
    const total = cartitem.reduce((acc, item) => {
      return acc + (item.price * item.quantity);  }, 0);
    setTotalAmount(total);
  };
  
  // const calculatetotla = ()=>{
  //   const totalitem = cartitem.map(item => {
  //     const totalprice = item.price * item.quantity;
  //     return {
  //       ...item,
  //       totalprice
  //     }
  //   })
  
  //   const total = totalitem.reduce((acc, item)=> acc + item.totalprice, 0)
  //   setTotalAmount(total);
  // }
  
  
  useEffect(()=>{
    calculateTotal();
  },[cartitem])

  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const productdata = [
    {
      id:1,
      image: "/OPcard1.png",
      title: "title 2",
      price: "12.99",
      quantity: "1",
    },
    {
      id:2,
      image: "/OPcard1.png",
      title: "title 2",
      price: "14.00",
      quantity: "1",
    },
  ];
  return (
    <>
      {cartitem.map((val, ind) => (
        <>
          <Box
            sx={{
              display: "flex",
              width: isSmall ? "100%" : "60%",
              marginTop: "1rem",
            }}
          >
            <Box>
              <img src={val.image} width="140rem" height={"145rem"} />
            </Box>

            <Box sx={{ marginLeft: "1rem" }}>
              <Typography
                sx={{
                  fontSize: isSmall ? "0.9rem" : "1.5rem",
                  fontWeight: 700,
                }}
              >
              {val.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: isSmall ? "0.8rem" : "1rem",
                  color: "green",
                  fontWeight: "700",
                }}
              >
                $ {val.price * val.quantity}
              </Typography>

              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: isSmall ? "0.8rem" : "1rem",
                }}
              >
                Count: {val.quantity}ct
              </Typography>
            </Box>
          </Box>
        </>
      ))}

      <br />
      <Divider />

      <Box
        sx={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ fontSize: isSmall ? "0.9rem" : "1.3rem", fontWeight: 600 }}
            >
              SubTotal:
            </Typography>
            <Typography
              sx={{
                color: "green",
                fontSize: isSmall ? "0.9rem" : "1.3rem",
                fontWeight: 600,
                marginLeft: "10px",
              }}
            >
              {" "}
              ${totalAmount}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: isSmall ? "0.8rem" : "1rem",
              display: isSmall ? "none" : "block",
            }}
          >
            Taxes and shipping calculated at checkout
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            fontSize: isSmall ? "0.8rem" : "1rem",
            fontWeight: "600",
            padding: isSmall ? "0.4rem 0.8rem" : "0.7rem 2.5rem",
            backgroundColor: "#51a2dc",
            borderRadius: "7px",
          }}
        >
          Continue Shopping{" "}
          <FiArrowUpRight
            style={{
              display: isSmall ? "none" : "block",
              marginLeft: isSmall ? "0rem" : "1.5rem",
              fontSize: isSmall ? "0.8rem" : "1.5rem",
              backgroundColor: "transparent",
            }}
          />
        </Button>
      </Box>
      <Typography
        sx={{
          fontSize: isSmall ? "0.8rem" : "1rem",
          display: isSmall ? "block" : "none",
          marginTop: "0.3rem",
        }}
      >
        Taxes and shipping calculated at checkout
      </Typography>

      <Box sx={{ marginTop: "2rem" }}>
        <Typography sx={{ fontWeight: 550 }}>Add Note</Typography>

        <CustomTextField multiline rows={5} placeholder="Add a note..." />
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{
          borderRadius: isSmall ? "8px" : "12px",
          marginTop: isSmall ? "1rem" : "2rem",
          textTransform: "none",
          fontSize: isSmall ? "0.9rem" : "1.1rem",
          fontWeight: 600,
        }}
      >
        Check Out
      </Button>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignitems: "center",
          marginTop: "2rem",
        }}
        gap={2}
      >
        <DiscountTextField
          size={isSmall ? "small" : "auto"}
          placeholder="Discount code..."
        />

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            fontSize: isSmall ? "0.9rem" : "1rem",
            fontWeight: "600",
            padding: isSmall ? "0.4rem 1rem" : "0.7rem 2.5rem",

            borderRadius: "7px",
          }}
        >
          Apply{" "}
          <FiArrowUpRight
            style={{
              display: isSmall ? "none" : "block",
              marginLeft: isSmall ? "0.6rem" : "1.5rem",
              fontSize: isSmall ? "0.8rem" : "1.5rem",
              backgroundColor: "transparent",
            }}
          />
        </Button>
      </Box>
    </>
  );
};

export default ShoppingCartProduct;
