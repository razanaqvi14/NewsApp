import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="bg-gray-800 relative flex h-16 items-center justify-between">
        <ul className="flex mx-5" style={{ alignItems: "center" }}>
          <li className="mx-1">
            <Link className="text-white font-semibold text-base" to="/">
              NexusNews
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
          </li>
          <div className="dropdown mx-1">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              News Categories
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/business">
                  Business
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/general">
                  General
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/health">
                  Health
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/science">
                  Science
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/sports">
                  Sports
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    );
  }
}
