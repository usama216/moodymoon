import React, { useState } from "react";
import { Tabs, Tab, Box, Card } from "@mui/material";
import ShoppingCartProduct from "./components/ShoppingCartProduct";
import ShoppingCartQuantity from "./components/ShoppingCartQuantity";
import ShoppingCartTotal from "./components/ShoppingCartTotal";

function ShoppingCartMain() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        marginTop:'5rem'
      }}
    >
      <Card sx={{ padding: "2rem", width: '60%' }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "transparent",
            backgroundColor: '#f4f4f4',
            borderRadius: '10px',
            width: '100%',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="custom tabs"
            sx={{
              borderRadius: '10px',
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            {["Product", "Quantity", "Total"].map((label, index) => (
              <Tab
                key={label}
                label={label}
                sx={{
                  flexGrow: 1,
                  textAlign: "center",
                  backgroundColor: value === index ? "#00593b" : "transparent",
                  color: value === index ? "white" : "black",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&.Mui-selected": {
                    backgroundColor: "#00593b",
                    color: "white",
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Box sx={{ padding: "1rem" }}>
          {value === 0 && <ShoppingCartProduct />}
          {value === 1 && <ShoppingCartQuantity />}
          {value === 2 && <ShoppingCartTotal />}
        </Box>
      </Card>
    </Box>
  );
}

export default ShoppingCartMain;
