import React from 'react';
import { Link } from 'react-router-dom';
import InputCustom from '../common/InputCustom';
import TableCustom from '../common/TableCustom';

class UserForm extends React.Component {
  state = {
    items: []
  };

  usersLoading = false;

  componentDidMount() {
    this.props.userActions.fetchUsersThunk();
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if(!this.usersLoading && nextProps.users.isLoading)
      this.usersLoading = true;

    if(this.usersLoading && !nextProps.users.isLoading){
      this.usersLoading = false;
      this.setState({items: nextProps.users.items});
    }
  }

  onClick = () => {
    debugger;
  }

  render() {
    return (
      <div className="container">
        <div>
          <InputCustom />
          <button onClick={this.onClick}>Add User</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map(item => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                  </tr>)
              })
              }
            </tbody>
          </table>
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
