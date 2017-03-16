import React, {Component} from 'react'

class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit () {
    if (this.props.onSubmit) {
      const {username, content} = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({content: ''})
  }
  render () {
    return (
      <div className="input-wrapper clearfix">
        <div className="form-group">
          <span className="control-label">用户名:</span>
          <input value={this.state.username}
                 onChange={this.handleUsernameChange.bind(this)}
                 type="text" className="form-control" id="user" placeholder="用户名"></input>
        </div>
        <div className="form-group">
          <span className="control-label">评论:</span>
          <textarea value={this.state.content}
                    onChange={this.handleContentChange.bind(this)}
                    className="form-control" rows="3" placeholder="你的见解"></textarea>
        </div>
        <div className="">
          <button onClick={this.handleSubmit.bind(this)}
                  className="btn btn-primary btn-sm">提交</button>
        </div>
      </div>

    )
  }
}

export default CommentInput
