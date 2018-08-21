import React from 'react';
import PropTypes from 'prop-types';

class Fade extends React.Component {
  state = {
    in: false,
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
        compOpac: inValue ? 1.0 : 0.0
      })
      , 100
    );
  }

  render() {
    return (
      <div className="compFade" style={{opacity: this.state.compOpac}}>
        {this.props.theComponent}
      </div>
    );
  }
}

Fade.propTypes = {
  in: PropTypes.bool,
  theComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default Fade;
