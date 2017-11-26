import React from 'react';
const tinycolor = require('tinycolor2');
class ColorItem extends React.Component {
  constructor() {
    super()
  }
  render() {
    const c = tinycolor(this.props.color);
    const colorStr = {
      rgb: c.toRgbString(),
      hex: c.toHexString(),
      hsl: c.toHslString()
    }
    return (<div className="color-item">
      <div className="color-pane" style={{
          backgroundColor:this.props.color
      }}></div>
      <div className="color-name">{this.props.color}</div>
      <ul>
        <li className='color-str'>{colorStr.rgb}</li>
        <li className='color-str'>{colorStr.hex}</li>
        <li className='color-str'>{colorStr.hsl}</li>
      </ul>
    </div>)
  }
}

export default ColorItem
