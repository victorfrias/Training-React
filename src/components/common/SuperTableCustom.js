import React from 'react';
import PropTypes from 'prop-types';
import Fade from '../Fade';

class SuperTableCustom extends React.Component {
  maxWidth = '200px';

  render() {
    return (
      <table>
        <thead>
          <tr>
            {
              this.props.heads.map(item => {
                return (<th style={{textAlign: 'left', width: this.maxWidth}} key={item}>{item}</th>);
              })
            }
          </tr>
        </thead>
        <tbody>
        {
          this.props.items.map(item => {
            return (
              <tr key={item.id}>
              {
                Object.values(item).map(value => {
                  return(
                    <td style={{paddingRight: '3%', width: 'fit-content', flexWrap: 'wrap'}} key={item.id+value}>
                      <Fade in theComponent={value}/>
                    </td>
                  );}
                )
              }
              </tr>
            );
          })
        }
        </tbody>
      </table>
    );
  }
}

SuperTableCustom.propTypes = {
  heads: PropTypes.array,
  items: PropTypes.array
};

export default SuperTableCustom;
