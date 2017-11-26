require('./style/style.css')
import ColorContainer from './component/ColorContainer.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
const colors = [
  '#1abc9c',
  '#2ecc71',
  '#607d8b',
  '#ff5722',
  '#cddc39',
  '#a2c0cc',
  '#009688',
  '#bfbebe',
  '#fba4b4'
];
ReactDOM.render(<ColorContainer colors={colors}></ColorContainer>, document.getElementById('app'))
