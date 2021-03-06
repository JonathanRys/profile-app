import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header'
import Profile from '../Profile/Profile'
import History from '../History/History'

import { connect } from 'react-redux'

const updateUser = data => {
  return {
    type: "UPDATE_HISTORY",
    ...data
  }
}

const mapStateToProps = data => data

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: data => {
      dispatch(updateUser(data))
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name={this.props.data.firstName} />
        <div className="content">
          <Profile onClick={this.props.onClick} />
          <History history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
