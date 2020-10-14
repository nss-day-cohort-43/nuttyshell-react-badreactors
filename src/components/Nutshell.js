import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Nutshell.css"

export const Nutshell = () => (
  <>
    <Route render={() => {
      if (localStorage.getItem("nutshell_user")) {
        return (
          <>

            <ApplicationViews />
          </>
        )
      } else {
        return <Redirect to="/login" />
      }
    }} />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)