import React from 'react';

class ResultItem extends React.Component {
  constructor() {
    super()
  }
  render(){
    return (
      <div className="emoji-result-item">
        <img></img>
        <span>{this.props.title}</span>
      </div>
    )
  }
}
export default ResultItem
