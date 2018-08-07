import React from 'react';
import PropTypes from 'prop-types';

const InputCustom = props => {
  return (
    <div style={props.style}>
      <label style={{display: 'block'}} htmlFor={props.id}>{props.label}</label>
      <input type="text" id={props.id} value={props.value} onChange={props.onChange} />
    </div>
  );
};

InputCustom.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.object
};

export default InputCustom;
