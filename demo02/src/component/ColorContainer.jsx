import React from 'react';
import ColorItem from './ColorItem.jsx';

class ColorContainer extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (<div>
      {
        this.props.colors.map((item,index) => {
          return <ColorItem color={item} key={index}></ColorItem>
        })
      }
    </div>)
  }
}

export default ColorContainer
