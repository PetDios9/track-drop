import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import { Box,} from '@mui/system'
import React from 'react'

export default function TrackCard() {
    return (
        <Card sx={{maxWidth: 500}}>
            <CardHeader 
                avatar={
                    <Avatar>
                        P
                    </Avatar>
                }
                title="Peter Diosdado"
            />
            <Grid container direction="column" justifyContent="center">
                <Grid item>
                    <iframe 
                        src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" 
                        width="500" 
                        height="80" 
                        frameborder="0" 
                        allowtransparency="true" 
                        allow="encrypted-media"></iframe>
                </Grid>
                <Grid item>
                    <CardContent>
                        <Typography variant="body1" component="div">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item>
                    <CardActions>
                        <Button>Vibe</Button>
                        <Button>Add</Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}
