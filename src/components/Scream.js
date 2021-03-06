import React, { Component } from 'react'
// Import withStyles for adding global styles. //
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

// Needed to format the date to a readable one. //
import dayjs from 'dayjs';
// Plugin that formats the code for knowing how much time passed since published. //
import relativeTime from 'dayjs/plugin/relativeTime';

// MUI Components: pre-stablished css can be used. //
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Styles for the classes specified in Render (). //
const styles = {
    card: {
      position: 'relative',
      display: 'flex',
      marginBottom: 20
    },
    image: {
      minWidth: 200
    },
    content: {
      padding: 25,
      objectFit: 'cover'
    }
  };

export class Scream extends Component {
    render() {
      dayjs.extend(relativeTime);
        const {
            classes,
            scream: {
              body,
              createdAt,
              userImage,
              userHandle,
              screamId,
              likeCount,
              commentCount
            }
          } = this.props;
        return (
            <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            { dayjs(createdAt).fromNow() }
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </CardContent>
      </Card>
        )
    }
}


export default withStyles(styles)(Scream);