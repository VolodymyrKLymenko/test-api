import React, { Component } from 'react';
import { connect } from "react-redux"
import { compose } from "recompose"
import { bindActionCreators } from "redux"

import { setGender } from '../../actions/greeting-actions';

class GreetingSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: props.gender,
      name: props.userData.userName
    };
  }

  render() {
    return (
      <h2>
        {
          (this.state.gender === 1
            ? 'Hello guys!'
            : 'Hello all! ') + this.state.name + ' ' + this.props.userData.description
        }
      </h2>
    );
  }
}

const mapStateToProps = state => {
  const { gender } = state.greeting;
  const user = state.user;
  return {
    gender,
    userData: user
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setGender
    },
    dispatch
  )
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GreetingSimple)
