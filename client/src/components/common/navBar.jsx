import React, { Component } from 'react';
import logo from '../../images/logo.png';
import "./navBar.scss";

class NavBar extends Component {
  render() {
    return (
      <div className="custom-nav ui secondary  menu">
        <a className="item">
          <img src={logo}/>
        </a>
        <a className="item">
          Messages
        </a>
        <a className="item">
          Friends
        </a>
        <div className="right menu">
          <a className="ui item">
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default NavBar;