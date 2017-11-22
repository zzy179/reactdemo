import React from 'react';

class CommentForm extends React.Component {
  constructor() {
    super()
    this.handleAuthor =this.handleAuthor.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthor(e){
    this.setState({author:e.target.value})
  }
  handleText(e){
    this.setState({commentText:e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    if(!this.state.author||!this.state.commentText) return;
    const author = this.state.author.trim();
    const commentText = this.state.commentText.trim();
    this.props.onHandleSubmit({author:author,commentText:commentText})
  }
  render(){
    return(
      <div className="commentForm">
        <form>
          <input className="authorInput" placeholder="输入你的名字" onChange={this.handleAuthor}></input>
          <input className="textInput" placeholder="输入你的评论" onChange={this.handleText}></input>
          <button className="btn"  onClick={this.handleSubmit}>确定</button>
        </form>
      </div>
    )
  }
}
export default CommentForm
