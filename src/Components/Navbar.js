import React from "react";
import "./main.css";
import LogoImg from "../Images/image-avatar.png";
import { FaAlignLeft, FaRegTimesCircle } from "react-icons/fa";

class Nabvar extends React.Component {
  state = {
    switch: false,
  };

  openCloseNav() {
    let Switch = this.state.switch;
    this.setState({
      switch: !Switch,
    });
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-md">
          <div className="links">
            <div className="title">
              <p>sneakers</p>
            </div>
            <div className="link">
              <p>collections</p>
            </div>
            <div className="link">
              <p>men</p>
            </div>
            <div className="link">
              <p>women</p>
            </div>
            <div className="link">
              <p>about</p>
            </div>
            <div className="link">
              <p>contact</p>
            </div>
          </div>
          <div className="img">
            <img src={LogoImg} alt="." />
          </div>
        </div>

        <div className="nav-sm">
          <div className="nav-links">
            <div className="title">
              <div onClick={() => this.openCloseNav()} className="switch-nav">
                {this.state.switch ? "" : <FaAlignLeft />}
              </div>
              <p>sneakers</p>
            </div>
            <div className={`links ${this.state.switch ? "show-nav" : ""}`}>
              <div onClick={() => this.openCloseNav()} className="close-nav">
                <FaRegTimesCircle />
              </div>
              <div className="link">
                <p>collections</p>
              </div>
              <div className="link">
                <p>men</p>
              </div>
              <div className="link">
                <p>women</p>
              </div>
              <div className="link">
                <p>about</p>
              </div>
              <div className="link">
                <p>contact</p>
              </div>
            </div>
          </div>
          <div className="img">
            <img src={LogoImg} alt="." />
          </div>
        </div>
      </div>
    );
  }
}

export default Nabvar;
