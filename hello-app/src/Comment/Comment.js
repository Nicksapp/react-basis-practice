import React, {Component} from 'react'

class Comment extends Component {

  render () {
    return (
      <div className="list-group-item">
        {this.props.comment.username} : {this.props.comment.content}
      </div>
    )
  }
}

export default Comment
