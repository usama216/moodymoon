import {
  Box,
  Button,
  Divider,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { CgDisplayFullwidth } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";

const CustomTextField = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#b5c7bc",
      borderRadius: "10px",
      // size:'medium'
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
        borderRadius: "15px",
        // size:'medium'
      },
      "&:hover fieldset": {
        borderColor: "green",
        borderRadius: "10px",
      },
      "&.Mui-focused fieldset": {
        borderRadius: "10px",

        borderColor: "green",
      },
      backgroundColor: "white",
      borderRadius: "10px",

      color: "black",
    },
    "& .MuiInputBase-input": {
      borderRadius: "10px",
textAlign: "center",
      color: "black",
    },
    "& .MuiInputLabel-root": {
      borderRadius: "10px",

      color: "white",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-input::placeholder": {
      fontSize: "0.9rem",
      color: "green",
textAlign: "center",
      opacity: 1, // Ensure the placeholder is fully opaque
    },
  });

const ShoppingCartProduct = () => {
  return (
    <>
      <Box sx={{ display: "flex", width: "60%" }}>
        <Box>
          <img src="/OPcard1.png" width="100%" />
        </Box>

        <Box>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
            Ice Cream Cake - THC A Exotic Indoor PreRoll
          </Typography>

          <Typography sx={{ color: "green", fontWeight: "700" }}>
            $ 12.99
          </Typography>

          <Typography sx={{ fontWeight: "700" }}>Count: 1ct</Typography>
        </Box>
      </Box>
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
            <Typography sx={{ fontSize: "1.3rem", fontWeight: 600 }}>
              SubTotal:
            </Typography>
            <Typography
              sx={{
                color: "green",
                fontSize: "1.3rem",
                fontWeight: 600,
                marginLeft: "10px",
              }}
            >
              {" "}
              $12.99
            </Typography>
          </Box>

          <Typography>Taxes and shipping calculated at checkout</Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "600",
            padding: "0.7rem 5rem",
            backgroundColor: "#51a2dc",
            borderRadius: "7px",
          }}
        >
          Continue Shopping{" "}
          <FiArrowUpRight
            style={{
              marginLeft: "1.5rem",
              fontSize: "1.5rem",
              backgroundColor: "transparent",
            }}
          />
        </Button>
      </Box>

      <Box sx={{ marginTop: "2rem" }}>
        <Typography sx={{ fontWeight: 550 }}>Add Note</Typography>

        <CustomTextField multiline rows={5} placeholder="Add a note..." />
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{
          borderRadius: "12px",
          marginTop: "2rem",
          textTransform: "none",
          fontSize: "1.1rem",
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
      >
        <DiscountTextField placeholder="Discount code..." />

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: "600",
            padding: "0.7rem 2.5rem",

            borderRadius: "7px",
          }}
        >
          Apply{" "}
          <FiArrowUpRight
            style={{
              marginLeft: "1.5rem",
              fontSize: "1.5rem",
              backgroundColor: "transparent",
            }}
          />
        </Button>

      </Box>
    </>
  );
};

export default ShoppingCartProduct;
