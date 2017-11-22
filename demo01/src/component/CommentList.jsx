import Comment from './Comment.jsx'
import React from 'react'

class CommentList extends React.Component {
  constructor() {
    super()
  }
  render() {
    const commentNodes = this.props.data.map((item, index) => {
      return (<Comment author={item.author} key={index} commentText={item.commentText}>

      </Comment>
    ) });
      return(
        <div className="commentList">
          {commentNodes}
        </div>
      )

      }
}
export default CommentList
