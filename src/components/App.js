import React from 'react';
import InputCustom from './InputCustom';
import TableCustom from './TableCustom';

class App extends React.Component {
  state = {
    title: 'Demo App1',
    inputValue: '',
    bodyRows: [],
    headColumns: [{name: 'Id'}, {name: 'Name'}],
    index: 0
  };

  onClick = () => {
    let index = this.state.index;

    this.setState( {
      bodyRows: [...this.state.bodyRows, { columns: [index++, this.state.inputValue] }],
      index
    });
  };

  onChange = event => {
    this.setState( { inputValue: event.target.value } );
  };

  render() {
    return (
      <div style={{ height: '100%', width: '100%', display: 'flex', flexFlow: 'row nowrap' }}>
        <div
          id="sidebar"
          style={{ width: '100px', height: '100%', backgroundColor: 'lightblue' }} />
        <div
          id="app-content"
          style={{ display: 'flex', height: '100%', flexDirection: 'column', flexWrap: 'wrap', width: '100%', margin: '8px' }}>
          <h1>{this.state.title}</h1>
          <div>
            <InputCustom
              label="Name"
              inputCustomValue={this.state.inputValue}
              inputCustomOnChange={this.onChange}
            />
            <button onClick={this.onClick} >Click Me!</button>
          </div>
          <div>
            <TableCustom
              headColumns={this.state.headColumns}
              bodyRows={this.state.bodyRows}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
