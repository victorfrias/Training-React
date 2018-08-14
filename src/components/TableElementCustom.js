import React from 'react';
import PropTypes from 'prop-types';

/**
 * Custom demo TableElement
 * @param {string} itemName - Key Value
 */
class TableElementCustom extends React.Component {
  state = {
    itemOpac: 0.0
  }

  componentDidMount() {
    setTimeout(
      () => this.setState({itemOpac: 1.0})
      ,
      100
    );
  }

  render() {
    return (
      <td
        className="compFade"
        style={{opacity: this.state.itemOpac}}
      >
        {this.props.itemName}
      </td>
    );
  }
}

TableElementCustom.propTypes = {
  itemName: PropTypes.string.isRequired
};

export default TableElementCustom;
