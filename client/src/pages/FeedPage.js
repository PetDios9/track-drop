import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TrackCard from '../components/TrackCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/slices/postsState'

// const posts = [
//     {
//         id: 0,
//         user: {
//             name: 'Peter Diosdado',
//         },
//         post: {
//             comment: 'This track is so smooth. Love it. This track is so smooth. ',
//             trackLink: 'https://open.spotify.com/track/6WgkOAIOPoumdilSCdYFPB?si=6715b589591e4cbc'
//         }

//     },
//     {
//         id: 1,
//         user: {
//             name: 'Peter Diosdado',
//         },
//         post: {
//             comment: 'This track is so smooth. Love it. This track is so smooth. Loren ipsum some shit text to test length of components and other things',
//             trackLink: 'https://open.spotify.com/track/6WgkOAIOPoumdilSCdYFPB?si=6715b589591e4cbc'
//         }

//     },
// ]



export default function FeedPage() {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const loading = useSelector(state => state.posts.isLoading)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    console.log(posts)

    const renderedPosts = posts.map(post => 
        <Grid item xs={12}>
            <TrackCard id={post.id} user={post.user} comment={post.post.comment} trackLink={post.post.trackLink}/>
        </Grid>)

    return (
        <Box>
            <Grid container direction="column" alignItems="center" spacing={3}>
                {
                    loading ? 'loading...' :
                    renderedPosts
                }
            </Grid>
            
        </Box>
    )
}
