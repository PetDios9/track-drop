import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TrackCard from '../components/TrackCard'

const posts = [
    {
        id: 0,
        user: {
            name: 'Peter Diosdado',
        },
        post: {
            comment: 'This track is so smooth. Love it. This track is so smooth. ',
            trackLink: 'https://open.spotify.com/track/6WgkOAIOPoumdilSCdYFPB?si=6715b589591e4cbc'
        }

    },
    {
        id: 1,
        user: {
            name: 'Peter Diosdado',
        },
        post: {
            comment: 'This track is so smooth. Love it. This track is so smooth. Loren ipsum some shit text to test length of components and other things',
            trackLink: 'https://open.spotify.com/track/6WgkOAIOPoumdilSCdYFPB?si=6715b589591e4cbc'
        }

    },
]

export default function FeedPage() {
    return (
        <Box>
            <Grid container direction="column" alignItems="center" spacing={3}>
                <Grid item xs={12}>
                    <TrackCard id={posts[0].id} user={posts[0].user} comment={posts[0].post.comment} trackLink={posts[0].post.trackLink}/>
                </Grid>
                <Grid item xs={12}>
                    <TrackCard id={posts[0].id} user={posts[0].user} comment={posts[0].post.comment} trackLink={posts[0].post.trackLink}/>
                </Grid>
                <Grid item xs={12}>
                    <TrackCard id={posts[0].id} user={posts[0].user} comment={posts[0].post.comment} trackLink={posts[0].post.trackLink}/>
                </Grid>
                <Grid item xs={12}>
                    <TrackCard id={posts[0].id} user={posts[0].user} comment={posts[0].post.comment} trackLink={posts[0].post.trackLink}/>
                </Grid>
                <Grid item xs={12}>
                    <TrackCard id={posts[0].id} user={posts[0].user} comment={posts[0].post.comment} trackLink={posts[0].post.trackLink}/>
                </Grid>
            </Grid>
        </Box>
    )
}
