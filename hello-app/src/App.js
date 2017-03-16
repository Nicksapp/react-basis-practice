import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LikeButton extends Component {
  static defaultProps = {
    likeText : '点赞',
    dislikeText : '取消'
  }
  constructor() {
    super()
    this.state = {
      liked: false,
      btnClass: "btn btn-danger"
    }
  }
  clickOnLikeButton () {
    this.setState({
      liked: !this.state.liked
    })
  }
  render () {
    return (
      <button className={this.state.liked? "btn btn-info":"btn btn-danger"} onClick={this.clickOnLikeButton.bind(this)}>
        {this.state.liked?  this.props.dislikeText : this.props.likeText}👍
      </button>
    )
  }
}

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
class ListTest extends Component {
  render() {
    return(
      <ul className="list-group">
      {
        users.map((user, id) => {
          return (
              <li key={id} className="list-group-item">
                <div>姓名 : {user.username} </div>
                <div>-年龄 : {user.age} </div>
                <div>-性别 : {user.gender} </div>
              </li>
          )
        })
      }
      </ul>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LikeButton likeText="喜欢" />
        <ListTest />
      </div>
    );
  }
}

export default App;
