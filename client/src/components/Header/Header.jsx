import React from 'react';
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Grid,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/system';
import HeaderSearchBar from './HeaderSearchBar/HeaderSearchBar';
import HeaderMenu from './HeaderMenu/HeaderMenu';

function Header() {
  return (
    <Box>
      <AppBar
        elevation={1}
        sx={{
          width: '100%',
          backgroundColor: '#414536',
          color: '#FFF',
        }}
        position="sticky"
      >
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6">Track Drop</Typography>
            </Grid>
            <Grid item>
              <HeaderSearchBar />
            </Grid>
            <Box>
              <Grid item>
                <Stack direction="row" spacing={3}>
                  <HeaderMenu />
                  <Box>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="primary-search-account-menu"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Box>
                </Stack>
              </Grid>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
