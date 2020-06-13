import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
        <h1 style={{color: 'red'}}>CONTACT</h1>
        <label for="firstName">First Name</label>
         <select name="firstname" id="firstname">
        <option value="Tony">Tony</option>
        <option value="Stark">Stark</option>
        <option value="Hello">Hello</option>
        <option value="World">World</option>
        <option value="Tom">Tom</option>
        <option value="Jerry">Jerry</option>
        </select>
        <label for="lastName">Last Name</label>
        <select name="lastname" id="lastname">
        <option value="Tony">Tony</option>
        <option value="Stark">Stark</option>
        <option value="Hello">Hello</option>
        <option value="World">World</option>
        <option value="Tom">Tom</option>
        <option value="Jerry">Jerry</option>
        </select>

          

          <input type="submit"/>
          <h2 style={{color:'blue'}}>RESULT</h2>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;