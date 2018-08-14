import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserForm from '../forms/UserForm';
import * as userActions from '../../actions/userActions';

const UserPage = props => {
  return (
    <UserForm
      users={props.users}
      userActions={props.userActionsWithDispatch}
    />
  );
};

UserPage.propTypes = {
  users: PropTypes.object,
  userActionsWithDispatch: PropTypes.object
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userActionsWithDispatch: bindActionCreators(userActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
