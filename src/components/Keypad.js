import React, { Component } from 'react';

class Keypad extends React.Component {

  message = () => {
    console.log("Entering password...")
  }

  render() {
    return (
  <div>
    <input
    type="password"
    onKeyUp={this.message} />
  </div>
    )
  }
}

export default Keypad;
