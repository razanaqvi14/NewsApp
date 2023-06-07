import React, { Component } from "react";
import loading from "../assets/loading.gif";

export default class spinner extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem", height: "23rem" }}>
        <div className="flex justify-center align-middle">
          <img className="w-40" src={loading} alt="" />
        </div>
      </div>
    );
  }
}
