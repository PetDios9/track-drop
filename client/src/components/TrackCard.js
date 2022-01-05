import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function TrackCard(props) {
    
    const embedLink=props.trackLink.slice(0,24) + '/embed' + props.trackLink.slice(24)
    
    return (
        <Box sx={{maxWidth: 500}}>
            <Card variant="outlined">
                <CardHeader 
                    avatar={
                        <Avatar>
                        </Avatar>
                    }
                    title={props.user.name}
                />
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <iframe 
                            src={embedLink}
                            width="500" 
                            height="80" 
                            frameborder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media"></iframe>
                    </Grid>
                    <Grid item>
                        <CardContent>
                            <Typography variant="body2" component="div" >
                                {props.comment}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item>
                        <CardActions>
                            <Button>Add to Playlist</Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}
