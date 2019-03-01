import React, { Component } from "react";
import { connect } from "react-redux"
import { compose } from "recompose"
import { bindActionCreators } from "redux"

import { setUserData } from '../../actions/form-actions';

class FormExample extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userName: props.userName,
        description: props.description,
        topFruit: props.topFruit
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleSubmit(event) {
      alert('New input value: ' + this.state.userName
              + '\nNew area value: ' + this.state.description
              + '\nNew fruit value: ' + this.state.topFruit);
      this.props.setUserData(this.state);
      event.preventDefault();
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:<br />
              <input type="text"
                     value={this.state.userName}
                     onChange={this.handleInputChange}
                     name='userName' />
            </label>
          </div>
          <div>
            <label>
              TextArea:<br />
              <textarea value={this.state.description}
                        onChange={this.handleInputChange}
                        name='description' />
            </label>
          </div>
          <div>
            <label>
              Options:<br />
              <select value={this.state.topFruit}
                      name='topFruit'
                      onChange={this.handleInputChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      )
    }
}
  
const mapStateToProps = state => {
  const { userName, description, topFruit } = state.user;
  return {
    userName,
    description,
    topFruit
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setUserData
    },
    dispatch
)
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(FormExample)
