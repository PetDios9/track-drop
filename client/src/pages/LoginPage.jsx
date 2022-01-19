/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button, Grid, Paper, TextField, Avatar, Typography, Link,
} from '@mui/material';
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
// import { Formik } from 'formik'

export default function LoginPage() {
  return (
    <Grid>
      <Paper
        sx={{
          padding: '20px', height: '70vh', width: 320, margin: '80px auto',
        }}
        elevation={10}
      >
        <Grid align="center">
          <Avatar sx={{ backgroundColor: 'green' }}><LockIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={8}>
            <TextField variant="standard" label="Username" placeholder="Enter Username" />
          </Grid>
          <Grid item xs={8}>
            <TextField variant="standard" label="Password" type="password" placeholder="Enter Password" />
          </Grid>
          <Grid item xs={8}>
            <Button variant="contained" type="submit" fullWidth>Submit</Button>
          </Grid>
          <Grid item xs={8}>
            <Typography>
              Don&#39;t have an account yet? Create one
              <Link href="#"> here!</Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
