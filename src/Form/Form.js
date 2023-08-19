import React from "react";
import './Form.css'; 
import axios from 'axios';

class Form extends React.Component {
  state = { userName:'' }
  handleSubmit = async ( event ) => {
    event.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}` );
    this.props.onSubmit( response.data );
    this.setState({ userName:'' });
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Guithub Username" value={this.state.value} onChange={event => this.setState({userName: event.target.value})} required />
        <button> Add Card </button>
      </form>
      </>
    );
  }
}

export default Form;
  