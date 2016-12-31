import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as auth from '../actions/';

class Signup extends React.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.formChange(e.target.name, e.target.value);
  }

  render() {
    return (
      <div className="signup-form">
        <h1 className={this.props.form.error ? 'show' : 'hide'}> {this.props.form.error}</h1>
        <form>
          <input onChange={this.handleChange} name="email" placeholder="email" value={this.props.form.email} />
          <input onChange={this.handleChange} name="password" type="password" placeholder="password" value={this.props.form.password} />
          <input onChange={this.handleChange} name="passwordValidate" type="password" placeholder="validate password" value={this.props.form.passwordValidate} />
        </form>
      </div>
    );
  }
}

const { string, isFunction, shape } = React.PropTypes;

Signup.propTypes = {
  form: shape({
    email: string,
    password: string,
    passwordValidate: string,
    error: string,
  }).isRequired,
  formChange: isFunction,
};

function mapStateToProps(state) {
  return {
    form: state.form,
  };
}

    // auth: state.auth,

function mapDispatchToProps(dispatch) {
  return bindActionCreators(auth, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
