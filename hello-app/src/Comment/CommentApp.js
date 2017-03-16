import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import logo from '../logo.svg';
import '../App.css';

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }
  handleSubmitComment (comment) {
    if (!comment) return false;
    if (!comment.username) return alert("What's your name?");
    if (!comment.content) return alert("What's your comment?");
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  render () {
    return (
      <div className="wrapper">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React 评论 Demo</h2>
        </div>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentApp
