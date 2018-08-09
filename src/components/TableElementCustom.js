import React from 'react';
import PropTypes from 'prop-types';

/**
 * Custom demo TableElement
 * @param {array: { columns: [] }} key - Key Value
 * * @param {array: { columns: [] }} itemName - Name Value
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
        key={this.props.key}
        className="compFade"
        style={{opacity: this.state.itemOpac}}
      >
         {this.props.itemName}
        </td>
    );
  }
}

TableElementCustom.propTypes = {
  key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  itemName: PropTypes.string.isRequired
};

export default TableElementCustom;
