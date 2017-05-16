import React from "react";
import { component } from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    let greeting;
    if (this.props.currentUser !== null) {
      greeting = (
        <div>
          <h2>Welcome to BenchBnb</h2>
          <h3>Mr. {this.props.currentUser.username}</h3>
          <button onClick={e => this.handleLogout(e)}>LOG OUT</button>
        </div>
      );
    } else {
        greeting = (
          <div>
            <p><Link to="/signup">Sign Up</Link></p>
            <p><Link to="/login">Log In</Link></p>
          </div>
        );
      }

    return (
      greeting
    );
  }
}

export default Greeting;
