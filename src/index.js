import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ButtonUI from './calcbuttons';
import TodoApp from './todoWithHooks';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ButtonsUI from './calcbuttons';

ReactDOM.render(
  <Router>
  <Switch>
  <Route path="/todo">
  <a href="/">Back to Mainpage</a>
  <TodoApp></TodoApp>
  </Route>
  <Route path="/calculator">
  <a href="/">Back to Mainpage</a>
  <ButtonsUI></ButtonsUI>
  </Route>
  <Route path="/">
  <a href="/todo">Click here for navigating to  Todo Project</a> <br></br>
  <a href="/calculator">Click here for navigating to Calculator Project</a>
  </Route>
  </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
