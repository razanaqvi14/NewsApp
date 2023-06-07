import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="bg-gray-800 relative flex h-16 items-center justify-between">
        <ul className="flex ml-6">
          <li className="mx-2">
            <a className="text-white font-semibold text-base" href="">
              NexusNews
            </a>
          </li>
          <li className="cursor-pointer mx-1">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Home
            </a>
          </li>
          <li className="cursor-pointer mx-1">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              About
            </a>
          </li>
          <li className="cursor-pointer mx-1">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              business
            </a>
          </li>
          <li className="cursor-pointer mx-1">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              entertainment
            </a>
          </li>
          <li className="cursor-pointer mx-1">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              general
            </a>
          </li>
          <li className="cursor-pointer mx-1">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              health
            </a>
          </li>
          <li className="cursor-pointer mx-1">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              science
            </a>
          </li>
          <li className="cursor-pointer mx-1">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              sports
            </a>
          </li>
          <li className="cursor-pointer mx-1">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              technology
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
