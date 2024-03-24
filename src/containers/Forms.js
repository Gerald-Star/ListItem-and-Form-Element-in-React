import React, { Component } from 'react';


class Forms extends Component {

  state = {
    value: ""
  }
  constructor(props) {
    super(props);

  }



  handleChange = (event) => {
    this.setState({ value: event.target.value })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    /*console.log(event.target.name.value)*/
    console.log(this.state.value)
  }

  render() {
    return (
      <div>
        {this.state.value}
        <form onSubmit={this.handleSubmit} >
          <label> Name</label>
          <input id="name" onChange={this.handleChange} type='text' />
          <button type="submit">Submit</button>

        </form>



      </div>
    );
  }
}


export default Forms;