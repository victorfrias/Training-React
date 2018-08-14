import React from 'react';
import { Link } from 'react-router-dom';

class UserForm extends React.Component {
  componentDidMount() {
    debugger;
    this.props.userActions.usersLoading(true);
  }

  componentWillReceiveProps(nextProps) {
    debugger;
  }

  render() {
    return (
      <div className="container">
        <Link to="/">
          <button>Return</button>
        </Link>
      </div>
    );
  }
}

export default UserForm;
