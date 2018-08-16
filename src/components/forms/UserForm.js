import React from 'react';
import { Link } from 'react-router-dom';
import InputCustom from '../common/InputCustom';
import TableCustom from '../common/TableCustom';
import SuperTableCustom from '../common/SuperTableCustom';

class UserForm extends React.Component {
  state = {
    items: []
  };

  usersLoading = false;

  componentDidMount() {
    this.props.userActions.fetchUsersThunk();
  }

  componentWillReceiveProps(nextProps) {    
    if(!this.usersLoading && nextProps.users.isLoading)
      this.usersLoading = true;

    if(this.usersLoading && !nextProps.users.isLoading){
      this.usersLoading = false;
      this.setState({items: nextProps.users.items});
    }
  }

  onClick = () => {
    
  }

  render() {
    return (
      <div className="container">
        <div>
          <InputCustom />
          <button onClick={this.onClick}>Add User</button>
        </div>
        <div>
          {/* <table>
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
                  </tr>
                  )
              })
              }
            </tbody>
          </table> */}
          <SuperTableCustom
            heads={['Id', 'ADate', 'Name', 'Avatar']}
            // items={
            //   [
            //     //[['1', '2'], ['3','4']]
            //     this.state.items.map(item => {
            //       [item.id, item.name]
            //     })
            //   ]
            // }
            items={this.state.items}
          />
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
