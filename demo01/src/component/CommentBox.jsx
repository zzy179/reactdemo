import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import $ from 'jquery'

const  data =[
    {
        "id": 1388534400000,
        "author": "Pete Hunt",
        "commentText": "Hey there!"
    },
    {
        "id": 1420070400000,
        "author": "Paul O’Shannessy",
        "commentText": "React is *great*!"
    },
    {
        "id": 1464988635157,
        "author": "ben",
        "commentText": "*abc*"
    },
    {
        "id": 1464988636500,
        "author": "ben",
        "commentText": "*abc*"
    },
    {
        "id": 1464988717637,
        "author": "evil",
        "commentText": "<a href=\"javascript:alert(1)\">alert(1)</a>"
    }
]
class CommentBox extends React.Component {
  constructor() {
    super()
    this.state={data:[]}
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
  }
  getDataFromServer(){
    setTimeout( ()=> {
      this.setState({data:data})
    }, 3000);
  }
  componentDidMount(){
    this.getDataFromServer()
  }
  handleCommentSubmit(data){
    console.log(this);
    this.setState({data:this.state.data.concat(data)})
  }
  render() {
    return (
      <div className="commentBox">
        <CommentList data = {this.state.data}></CommentList>
        <CommentForm onHandleSubmit={this.handleCommentSubmit}></CommentForm>
      </div>
    )
  }
}
export default CommentBox
