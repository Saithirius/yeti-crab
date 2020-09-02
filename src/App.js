import React from 'react';
import './App.css';
import Table from "./Components/Table";
import {initApp} from "./Redux/Table-reducer";
import {connect} from "react-redux";

function App(props) {
  props.initApp()
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default connect(null, {initApp})(App);
