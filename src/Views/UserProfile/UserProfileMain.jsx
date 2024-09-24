import React from 'react'
import { Box, Grid, useTheme, useMediaQuery } from '@mui/material'
import UserProfileCard from './userProfilecard'
import UserProfileOrderHistroy from './UserProfileOrderHistroy';


const UserProfileMain = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));  
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
   <Box sx={{p:'5%'}}>
   <Grid container spacing={5}> 
        <Grid item lg={7} md={7} sm={12} xs={12}>
          <Box height={'100%'}>
          <UserProfileCard/>
          </Box>
        
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12}>
        <Box height={'100%'}>
        <UserProfileOrderHistroy/>
          </Box>
        </Grid>
    </Grid>
   </Box>
    </>
  )
}

export default UserProfileMain