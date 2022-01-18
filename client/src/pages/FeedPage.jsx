import React, { useEffect } from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import TrackCard from '../components/TrackCard';
import { getPosts } from '../redux/slices/postsState';

function FeedPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.isLoading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
