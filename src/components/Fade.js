import React from 'react';

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
      ,100
    );
  }

  render() {
    return (
      <div className="compZoom" style={{opacity: this.state.compOpac}}>
        {this.props.theComponent}
      </div>
    );
  }
}

export default Fade;
