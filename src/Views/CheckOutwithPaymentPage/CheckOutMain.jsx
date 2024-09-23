import { Box, Grid } from '@mui/material'
import React from 'react'
import CheckOutPersonalInfoForm from './components/CheckOutPersonalInfoForm'
import CheckOutRightSidebar from './components/CheckOutRightSidebar'

const CheckOutMain = () => {
  return (
    <>

<Box sx={{padding:'2rem 5%'}}>

<Grid container spacing={3}>
    <Grid item lg={6} md={6} sm={12} xs={12}>
<CheckOutPersonalInfoForm/>
    </Grid>


    <Grid item lg={6} md={6} sm={12} xs={12}>
<CheckOutRightSidebar/>
</Grid>

</Grid>


</Box>
    </>
  )
}

export default CheckOutMain