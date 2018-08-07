import React from 'react';
import InputCustom from './InputCustom';
// import createPalette from 'material-ui/styles/createPalette';
// import createMuiTheme from 'material-ui/styles/createMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import withStyles from 'material-ui/styles/withStyles';
// import { grey, orange, amber, red } from 'material-ui/colors';
// import Master from './Master';
// import { styles } from '../styles/styles';

// import { withRouter } from 'react-router-dom';

// const customTheme = createMuiTheme({
//   overrides: {
//     MuiListItem: {
//       gutters: {
//         '@media (min-width:600px)': {
//           paddingLeft: '16px',
//           paddingRight: '16px'
//         }
//       }
//     }
//   },
//   palette: createPalette({
//     "primary": orange,
//     "accent": grey,
//     "secondary": amber,
//     "error": red,
//     "type": "light"
//   })
// });

class App extends React.Component {
  state = {
    name: "",
    names: []
  };

  onChange = event => {
    this.setState({name: event.target.value});
  };

  onClick = () => {
    this.setState(state => { return { names: [...state.names, state.name] }; });
  };

  render() {
    return (
      [
        <div id="sidebar" key="1" style={{backgroundColor: 'lightblue', width: '100px'}}/>,
        <div id="pageContent" key="2" style={{width:'100%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', margin: '8px'}}>
          <h1 style={{width: '100%'}}>Page Title</h1>
          <div style={{width: '100%', display: 'flex', alignItems: 'flex-end'}}>
            <InputCustom
              id={"name"}
              label={"Name"}
              value={this.state.name}
              onChange={this.onChange}
            />
            <button style={{marginLeft: '10px', height: '30px'}} onClick={this.onClick}>Click me!</button>
          </div>
          <div style={{width: '100%', marginTop: '10px'}}>
            <table>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
              {this.state.names.map((name, i) => {
                return (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{name}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      ]
      //<MuiThemeProvider theme={customTheme} >
        //<Master {...this.props}/>
      //</MuiThemeProvider>
    );
  }
}

export default App;
//export default withRouter(withStyles(styles, { withTheme: true })(App));
