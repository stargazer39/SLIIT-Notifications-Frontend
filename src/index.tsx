import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import ReactDOM from 'react-dom';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import App from './App';
import About from './About';
import reportWebVitals from './reportWebVitals';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <TopBar/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/app">
          <App/>
        </Route>
      </Switch>
      <BottomBar/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
