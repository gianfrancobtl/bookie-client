import React, { Component } from 'react';

// Grid for using grid view. Every scream is displayed into one. //
import Grid from '@material-ui/core/Grid';

// Import of axios for fetching elements fromthe back-end. //
import axios from 'axios';

// Import of the scream with all the css and MUI applied. //
import Scream from '../components/Scream';

class home extends Component {
  // State object to be filled with the fetched screams. //  
  state = {
        screams: null
    }
  componentDidMount() {
    axios
    .get('/screams')
    .then(res => {
        this.setState({
            screams: res.data
        })
    })
    .catch((err) => console.log(err));
  }
  render() {
    // If scream is fetched, show it, else "loading..." //
    let recentScreamsMarkup = this.state.screams ? (
        this.state.screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
      ) : (
        <p>loading...</p>
      );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
            <p>profile...</p>
        </Grid>
      </Grid>
    );
  }
}

export default home;