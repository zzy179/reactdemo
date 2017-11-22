import React from 'react';

class Comment extends React.Component {
  constructor() {
    super()
  }
  render(){
    return (
      <div className="comment">
        <h4 className="author">{this.props.author}</h4>
        <p className="commentText">{this.props.commentText}</p>
      </div>

    )
  }
}

export default Comment
