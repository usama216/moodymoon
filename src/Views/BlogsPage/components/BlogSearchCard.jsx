import {
  Button,
  Card,
  Divider,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const CustomTextField = styled(TextField)({
  width: "100%",

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#b0c5b9",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#b0c5b9",
      borderRadius: "10px",
    },
    "&.Mui-focused fieldset": {
      borderRadius: "10px",

      borderColor: "#b0c5b9",
    },
    backgroundColor: "#f1f5f3",
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
    fontSize: "1rem",
    color: "gray",
    opacity: 1,
  },
});

const tags = [
  "AnxietyRelief",
  "Cannabinoids",
  "CBDBenefits",
  "CBDOils",
  "CBDDosage",
  "CBDEdibles",
  "CBDGuide",
  "CBDResearch",
  "CBDLaws",
  "CBDQuality",
  "CBDTips",
  "CBDCompliance",
];

const BlogSearchCard = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");

  const handleTagClick = (tag) => {
    setSearchQuery(tag); // Set the clicked tag as search query
    // Here you can trigger a search action if required
    console.log("Search for:", tag);
  };

  return (
    <>
      <Card sx={{ padding: "1rem 1rem" }}>
        <Typography sx={{ fontSize: "1.7rem", fontWeight: 700 }}>
          Search
        </Typography>

        <CustomTextField
          placeholder="Search here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            sx: {
              padding: 0,
            },
            endAdornment: (
              <InputAdornment position="end" style={{ padding: 0, margin: 0 }}>
                <IconButton
                  variant="contained"
                  sx={{
                    padding: "1rem 1rem",
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "0px 10px 10px 0px",
                  }}
                  onClick={() => console.log("Search for:", searchQuery)}
                >
                  <IoSearchSharp
                    style={{ fontSize: "1.5rem", color: "white" }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Card>

      <Card sx={{ marginTop: "2rem", padding: "1rem", minHeight:'25rem', maxHeight:'25rem' }}>
        <Typography sx={{ fontSize: "1.7rem", fontWeight: 700, color:theme.palette.primary.main }}>
          Tags
        </Typography>
        <Divider />

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {tags.map((tag) => (
            <Button
              key={tag}
              variant="outlined"
              sx={{
                borderColor: "#b0c5b9",
                color: "black",
                textTransform: "none",
                borderRadius: "20px",
                fontSize: "1rem",
                fontWeight: 600,
                backgroundColor: "#dce6e0",
                "&:hover": {
                  backgroundColor: "#b0c5b9",
                  borderColor: "#b0c5b9",
                },
              }}
              onClick={() => handleTagClick(tag)}
            >
              #{tag}
            </Button>
          ))}
        </div>
      </Card>
    </>
  );
};

export default BlogSearchCard;
