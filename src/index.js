import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom"
import { Nutshell } from "./components/Nutshell.js"
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nutshell />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
