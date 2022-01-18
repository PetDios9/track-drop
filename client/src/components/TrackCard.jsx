import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

function TrackCard({
  id, trackLink, user, comment,
}) {
  const embedLink = `${trackLink.slice(0, 24)}/embed${trackLink.slice(24)}`;

  return (
    <Box sx={{ maxWidth: 500 }}>
      <Card variant="outlined">
        <CardHeader avatar={<Avatar />} title={user.name} />
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <iframe
              title={id}
              src={embedLink}
              width="500"
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </Grid>
          <Grid item>
            <CardContent>
              <Typography variant="body2" component="div">
                {comment}
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
  );
}

TrackCard.propTypes = {
  id: PropTypes.number,
  trackLink: PropTypes.string,
  comment: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

TrackCard.defaultProps = {
  id: null,
  trackLink: '',
  comment: '',
  user: {},
};

export default TrackCard;
