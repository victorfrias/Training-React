import React from 'react';
import PropTypes from 'prop-types';

class Zoom extends React.Component {
  state = {
    in: false,
    compScale: 0.0,
    compOpac: 0.0
  }

  componentDidMount() {
    this.handleIn(this.props.in);
  }

  componentWillReceiveProps(nextProps) {
    this.handleIn(nextProps.in);
  }

  handleIn = (inValue) => {
    setTimeout(
      () => this.setState({
        compScale: inValue ? 1.0 : 0.0,
        compOpac: inValue ? 1.0 : 0.0
      })
      ,300
    );
  }

  render() {
    return (
      <div className="compZoom" style={{transform: 'scale(' + this.state.compScale + ')'}}>
        {this.props.theComponent}
      </div>
    );
  }
}

Zoom.propTypes = {
  in: PropTypes.number,
  theComponent: PropTypes.element
};

export default Zoom;
