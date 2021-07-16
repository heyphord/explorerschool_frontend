import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import TutorsPage from "../views/TutorsPage";


export default function RootLayout() {
  return (
    <div>
      <Switch>
        
        <Route path="/website/tutors" component={TutorsPage} />
       
        <Redirect to="/website/tutors" />
      </Switch>

    </div>
  );
}
