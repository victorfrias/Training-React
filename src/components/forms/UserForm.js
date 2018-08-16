import React from 'react';
import { Link } from 'react-router-dom';
import InputCustom from '../common/InputCustom';
import TableCustom from '../common/TableCustom';

class UserForm extends React.Component {
  state = {
    items: [],
    inputValue : ''
  };

  usersLoading = false;
  userPosting = false;

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

    debugger;
    if(!this.userPosting && nextProps.users.isPosting)
      this.userPosting = true;

    if(this.userPosting && !nextProps.users.isPosting){
      this.userPosting = false;
      this.setState({items: nextProps.users.items});
    }
  }

  onChange = event =>{
    this.setState({inputValue : event.target.value});
  }

  onClick = () => {
    this.props.userActions.postUsersThunk( { name : this.state.inputValue });
    this.setState({inputValue : ''});
  }

  render() {
    return (
      <div className="container">
        <div>
          <InputCustom
            label = {'Usuário'}
            inputCustomValue={this.state.inputValue}
            inputCustomOnChange={this.onChange}

          />
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
