import React from 'react';
import PropTypes from 'prop-types';

/**
 * Custom demo input
 * @param {string} label - The label content.
 * @param {function(event: object) => void} inputCustomOnChange - Callback fired when the value is changed.
 * @param {string | number} inputCustomValue - The value of the Input element, required for a controlled component.
 */
const InputCustom = ({label, inputCustomValue, inputCustomOnChange}) => {
  return (
    <div>
      <label style={{display: 'block'}}>
        {label}
      </label>
      <input
        value={inputCustomValue}
        onChange={inputCustomOnChange}
      />
    </div>
  );
};

InputCustom.propTypes = {
  label: PropTypes.string.isRequired,
  inputCustomValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  inputCustomOnChange: PropTypes.func.isRequired
};

export default InputCustom;
