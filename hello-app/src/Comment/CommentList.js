import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }
  render () {


    return (
      <ul className="list-group">
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
      </ul>
    )
  }
}

export default CommentList
