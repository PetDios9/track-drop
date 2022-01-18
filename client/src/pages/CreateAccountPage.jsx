/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button, Grid, Paper, TextField, Avatar, Typography, Link,
} from '@mui/material';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
// import { Formik } from 'formik'

export default function LoginPage() {
  return (
    <Grid>
      <Paper
        sx={{
          padding: '30px', height: '60vh', width: 350, margin: '80px auto',
        }}
        elevation={10}
      >
        <Grid align="center">
          <Avatar sx={{ backgroundColor: 'green' }}><PersonIcon /></Avatar>
          <h2>Create Account</h2>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={8}>
            <TextField variant="standard" label="Username" placeholder="Enter Username" />
          </Grid>
          <Grid item xs={8}>
            <TextField variant="standard" label="Email" type="password" placeholder="Enter Email" />
          </Grid>
          <Grid item xs={8}>
            <TextField variant="standard" label="Password" type="password" placeholder="Enter Password" />
          </Grid>
          <Grid item xs={8}>
            <TextField variant="standard" label="Confirm Password" type="password" placeholder="Re-Enter Password" />
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" type="submit" fullWidth>Submit</Button>
          </Grid>
          <Grid item xs={8}>
            <Typography>
              Already have an account? Click
              <Link href="#"> here!</Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
