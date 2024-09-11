import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, useTheme, useMediaQuery, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { BsDashLg } from "react-icons/bs";

const Faqs = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqsData = [
    { question: "Nutritional Powerhouse", answer: "Hemp seeds are packed with essential nutrients like protein, fiber, healthy fats, and vitamins. They offer a complete plant-based protein source and essential fatty acids to support overall health." },
    { question: "Digestive Health", answer: "The fiber content in hemp seeds promotes digestive health. They can help regulate bowel movements, alleviate constipation, and support a healthy gut microbiome." },
    { question: "Balanced Plant-Based Protein", answer: "Hemp protein is a complete protein, containing all nine essential amino acids. It provides a balanced plant-based protein source for muscle repair, growth, and overall well-being." },
    { question: "Anti-inflammatory Properties", answer: "Hemp seeds are rich in omega-3 fatty acids, which have anti-inflammatory properties. These fatty acids can help reduce inflammation in the body, which is linked to various health conditions." },
    { question: "Mood & Stress Regulation", answer: "Hemp seeds contain compounds that may help regulate mood and reduce stress. They can contribute to a sense of calm and well-being, promoting overall mental health" },
    // { question: "How do you help with data privacy compliance (GDPR, CCPA, etc.)? ", answer: "We assist with compliance by providing expert guidance and implementing necessary measures." }
  ];

  return (
    <Box sx={{ backgroundColor: '#fae9cbc0', padding: '1rem', borderRadius: '10px' }}>
      {faqsData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            backgroundColor: 'transparent',
            color: '#153321',
            marginBottom: '.5rem',
            borderRadius: '5px',
            boxShadow: 'none', // Remove box shadow completely
            border: 'none', // Remove border
            '&:before': {
              display: 'none', // Remove the default bottom line
            },
          }}
        >
          <AccordionSummary
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 1rem',
              backgroundColor: 'transparent', // Ensure transparency
              boxShadow: 'none', // Remove any box shadow
            }}
          >
            <IconButton
              sx={{
                color: 'white',
                marginRight: '1rem',
                backgroundColor: expanded === index ? '#17364c' : '#153321',
                width: '25px', // Adjusted width for the background
                height: '25px', // Adjusted height for the background
                borderRadius: '50%', // Ensure circular shape
                fontSize: '1.5rem', // Adjusted icon size
                '&:hover': {
                  backgroundColor: expanded === index ? '#17364c' : '#153321',
                }
              }}
            >
              {expanded === index ? <BsDashLg /> : <AddIcon />}
            </IconButton>
            <Typography sx={{
              fontSize: isSmall ? '1rem' : '1.3rem',
              fontWeight: 600,
              color: expanded === index ? '#17364c' : '#153321',
              flexGrow: 1,
              wordBreak: 'break-word',
            }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{
            color: '#2c2c2c', // Maintain text color
            backgroundColor: 'transparent', // Transparent background
            padding: '0 1rem',
          }}>
            <Typography sx={{
              fontSize: isSmall ? "0.9rem" : '1rem',
              fontWeight: '400',
              wordBreak: 'break-word',
            }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faqs;
