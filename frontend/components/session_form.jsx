import React from "react";
import { component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    const type = this.props.formType;
    let errors = [];
    if (this.props.errors.length > 0) {
      errors = this.props.errors;
    }
    return (
      <div>
        <h2>Please {type}</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <p>{errors}</p>
        <input placeholder="Username" onChange={this.update('username')}/>
        <input placeholder="Password" onChange={this.update('password')}/>
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
