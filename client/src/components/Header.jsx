import React from 'react';
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Grid,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Box } from '@mui/system';
import HeaderSearchBar from './HeaderSearchBar/HeaderSearchBar';

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                  <Box>
                    <IconButton
                      size="large"
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                  </Box>
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
