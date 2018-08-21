import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import App from './App';
import UserPage from './containers/UserPage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Master extends React.Component {
  state = {
    pageTitle: 'Home'
  };

  componentDidMount() {
    this.props.history.listen(this.routeWillChange);
    this.routeWillChange(window.location);
  }

  routeWillChange = (route) => {
    switch(route.pathname) {
      case "/users":
        this.setState({ pageTitle: "Users" }); break;
      default:
        this.setState({ pageTitle: "Home" }); break;
    }
  };

  render() {
    return (
      <div style={{ width: '100%', display: 'flex' }}>
        <div
          id="sidebar"
          style={{ width: '100px', backgroundColor: 'lightblue' }} />
        <div
          id="app-content"
          className="content">
          <h1>{this.state.pageTitle}</h1>
          <Switch>
            <Route exact path="/" render={(routeProps) => {
             return (
              <App
                {...routeProps}
              />);
            }}/>
            <Route
              path="/users"
              render={() => (<UserPage />)}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

Master.propTypes = {
  history: PropTypes.object
};

export default withRouter(connect()(Master));
