import React, { useEffect } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import TrackCard from '../components/TrackCard';
import { getPosts } from '../redux/slices/postsState';

// const posts = [
//   {
//     id: 0,
//     user: {
//       name: 'Peter Diosdado',
//     },
//     post: {
//       comment: 'This track is so smooth. Love it. This track is so smooth. ',
//       trackLink: 'https://open.spotify.com/track/6WgkOAIOPoumdilSCdYFPB?si=6715b589591e4cbc',
//     },

//   },
//   {
//     id: 1,
//     user: {
//       name: 'Peter Diosdado',
//     },
//     post: {
//       comment: 'me too',
//       trackLink: 'https://open.spotify.com/track/6ls5ulRydoPE7oWGPGBqFA?si=9e0f5575dfa94ff8',
//     },

//   },
// ];

function FeedPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.isLoading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts);

  return (
    <Box>
      <Grid container direction="column" alignItems="center" spacing={3}>
        {loading ? <CircularProgress /> : posts.map(({ id, user, post }) => (
          <Grid item xs={12} key={id}>
            <TrackCard
              id={id}
              user={user}
              comment={post.comment}
              trackLink={post.trackLink}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FeedPage;
