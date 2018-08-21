import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import InputCustom from '../common/InputCustom';
import SuperTableCustom from '../common/SuperTableCustom';

class UserForm extends React.Component {
  state ={
    items: [],
    inputValue: ''
  };

  componentDidMount() {
    this.props.userActions.getUsersSaga();
  }

  componentWillReceiveProps(nextProps) {
    if(!this.usersLoading && nextProps.users.isLoading)
      this.usersLoading = true;

    if(this.usersLoading && !nextProps.users.isLoading){
      this.usersLoading = false;
      this.setState({items: nextProps.users.items});
    }

    if(!this.usersPosting && nextProps.users.isPosting)
      this.usersPosting = true;

    if(this.usersPosting && !nextProps.users.isPosting){
      this.usersPosting = false;
      this.setState({items: nextProps.users.items.slice(0)});
    }
  }

  usersLoading = false;
  usersPosting = false;

  onClick = () => {
    this.props.userActions.postUserThunk({ name: this.state.inputValue });
  };

  onChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="flexend">
          <InputCustom
            label="New name:"
            inputCustomValue={this.state.inputValue}
            inputCustomOnChange={this.onChange}
          />
          <button onClick={this.onClick} style={{height: '25px', marginLeft: '5px'}}>Add User</button>
        </div>
        <div>
          <SuperTableCustom
            heads={['Id', 'ADate', 'Name', 'Avatar']}
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

UserForm.propTypes = {
  users: PropTypes.object,
  userActions: PropTypes.object
};

export default UserForm;
