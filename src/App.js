// Functional components needs React to be initialized. //
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// General application CSS Styling file. //
import './App.css';
// Libraries for creating the theme. //
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// Library that decodes (converts into intelligible language) json web tokens. //
import jwtDecode from 'jwt-decode';
// Redux. //
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';
// Components. //
import Navbar from './components/Navbar';
// 1. theme.js has all the styling for elements in the project. //
import themeObject from './util/theme';
// //
import AuthRoute from './util/AuthRoute';
// Import of axios for handling with the token. //
import axios from 'axios';
// Pages. //
import login from "./pages/login";
import signup from "./pages/signup";
import home from "./pages/home";

// 1. Theme set for the general design of the project. //
const theme = createMuiTheme(themeObject);

// //
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  // If the token is expired, redirect to login page. //
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
