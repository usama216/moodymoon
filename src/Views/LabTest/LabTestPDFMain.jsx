import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

const LabTestPDFMain = () => {
  const pdfs = [
    { title: "Night Fire OG", path: "NightFireOG.pdf" },
    { title: "Mendo Breath THCA", path: "Mendo_Breath_THCA.pdf" },
    { title: "Cherry Cake", path: "Cherry_Cake.pdf" },
    { title: "Cheetah Piss", path: "Cheetah_Piss.pdf" },
    { title: "Grape Ape THCA", path: "Grape_Ape_THCA.pdf" },
    { title: "Blueberry OG", path: "Blueberry_OG.pdf" },
  ];

  const handleViewPDF = (path) => {
    window.open(path, '_blank');
  };

  return (
    <Box sx={{ padding: "3rem 5%" }}>
      <Grid container spacing={3}>
        {pdfs.map((pdf, index) => (
          <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
            <Box
              sx={{
                backgroundColor: "#17364c",
                color: "white",
                padding: "2rem 3rem",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "700" }}>
                {pdf.title}
              </Typography>
              <br />
              <Button
                onClick={() => handleViewPDF(pdf.path)}
                sx={{
                  borderRadius: "10px",
                  textTransform: "none",
                  padding:'0.5rem 2rem',
                  fontSize: "1rem",
                  backgroundColor:'#f0ab3b',

                  '&:hover':{
                    backgroundColor:'#f0ab3b'
                  },
                  fontWeight: 600,
                }}
                variant="contained"
              >
                View
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LabTestPDFMain;
