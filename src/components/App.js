import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import AgeStats from './AgeStats';
import "./App.css";
import logo from '../assets/logo.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newDate: "",
      birthday: '1992-06-21',
      showStats: false
    };
  }

  changeBirthday(){
    console.log(this.state);
    this.setState({
      birthday: this.state.newDate,
      showStats: true
    })
  }

  render() {
    return (
      // <div className="App-header">
      //   <img src="{logo}" alt="logo"/>
      // </div>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>
        <Form inline>
          <h2>Input your birthday</h2>
          <FormControl
            onChange={event => this.setState({ newDate: event.target.value })}
            type="date"
          />
          {" "}
          <Button onClick={()=>this.changeBirthday()}>
            Submit
          </Button>
          {
            this.state.showStats ?
            <div className="fade age-stats">
              <AgeStats date={this.state.birthday} />
            </div>
            :
            <div></div>
          }
        </Form>
      </div>
    );
  }
}

export default App;
