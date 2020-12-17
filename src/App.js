import logo from './assets/logo.png';
import './App.css';
import React from 'react';

class App extends React.Component{
  url = 'https://www.bridgelabz.com/'
  constructor(){
    super()
    this.state = {
      userName : '',
      nameError: ''
    }
  }

  // onclick function
  onClick = ($event) => {
    console.log("save button is clicked!!", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("Value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[A-Za-z ]{1,}$');
    // set the title using setState method
    this.setState({userName : event.target.value});
    if(nameRegex.test(event.target.value)){
      this.setState({nameError: ''})
    } else{
      this.setState({nameError: 'Name is incorrect'})
    }
  }

  render(){
    return(
      <div>
        <div>
          <h1>Hello {this.state.userName} from Rohan</h1>
            <img src={logo} onClick = {this.onClick}
              alt="The bridgelabz logo: A bridge to employment" />
        </div>
        <div className="text-box">
          <input onChange = {this.onNameChange} />
          <span className="error-output">{this.state.nameError}</span>
        </div>
      </div>
    );
  }
}

export default App;
