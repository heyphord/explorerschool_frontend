import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import TutorsPage from "../views/TutorsPage";
import TutorDetailsPage from "../views/TutorDetailsPage";
import AddTutorPage from "../views/AddTutorPage";
import EditTutorPage from "../views/EditTutorPage";
import AddStudentPage from "../views/AddStudentPage";
import EditStudentPage from "../views/EditStudentPage";


export default function RootLayout() {
  return (
    <div>
      <Switch>
        
        <Route path="/website/tutors" component={TutorsPage} />
        <Route path="/website/tutor" component={TutorDetailsPage} />
        <Route path="/website/add-tutor" component={AddTutorPage} />
        <Route path="/website/edit-tutor" component={EditTutorPage} />
        <Route path="/website/add-student" component={AddStudentPage} />
        <Route path="/website/edit-student" component={EditStudentPage} />
       
        <Redirect to="/website/tutors" />
      </Switch>

    </div>
  );
}
