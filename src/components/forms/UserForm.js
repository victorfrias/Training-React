import React from 'react';
import { Link } from 'react-router-dom';
import InputCustom from '../common/InputCustom';
import TableCustom from '../common/TableCustom';

class UserForm extends React.Component {
  componentDidMount() {
    //this.props.userActions.usersLoading(true);
  }

  componentWillReceiveProps(nextProps) {
    debugger;
  }

  onClick = () => {
    debugger;
    this.props.userActions.fetchUsersThunk();
  }

  render() {
    return (
      <div className="container">
        <div>
          <InputCustom />
          <button onClick={this.onClick}>Add User</button>
        </div>
        <div>
          <TableCustom>
          </TableCustom>
        </div>
        <div>
          <Link to="/">
            <button>Return</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserForm;
