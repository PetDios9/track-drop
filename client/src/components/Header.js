import React from 'react'
import {AppBar, IconButton, Stack, Toolbar, Typography,Grid} from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle'
import { Box } from '@mui/system'
import { styled, alpha } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'

export default function Header() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));

    return (
        <Box sx={{paddingBottom: '69px'}}>
            <AppBar 
                elevation={1} 
                sx={{
                    width: '100%',
                    backgroundColor: '#414536',
                    color: '#FFF',
                }}
            >
                <Toolbar>
                    <Grid container justifyContent='space-between' alignItems="center">
                    <Grid item>
                        <Typography variant='h6'>Track Drop</Typography>
                    </Grid>
                    <Grid item>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
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
                                    >
                                        <MoreVertIcon/>
                                    </IconButton >
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
    )
}
