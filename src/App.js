import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// General application CSS Styling file. //
import './App.css';

// Libraries for creating the theme. //
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Components. //
import Navbar from './components/Navbar';

// 1. theme.js has all the styling for elements in the project. //
import themeObject from './util/theme';

// Pages. //
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

// 1. Theme set for the general design of the project. //
const theme = createMuiTheme(themeObject);

function App() {
  return (
    <div className="App">
      <h1>Our app</h1>
      <MuiThemeProvider theme={theme}>

      <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/" component={home} />
                <Route path="/login" component={login} />
                <Route path="/signup" component={signup} />
              </Switch>
            </div>
          </Router>
          </MuiThemeProvider>
    </div>
  );
}

export default App;
