import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";


import HomePage from "../views/HomePage";
import TutorsPage from "../views/TutorsPage";
import TutorDetailsPage from "../views/TutorDetailsPage";
import AddTutorPage from "../views/AddTutorPage";
import EditTutorPage from "../views/EditTutorPage";
import AddStudentPage from "../views/AddStudentPage";
import EditStudentPage from "../views/EditStudentPage";
import StudentsPage from "../views/StudentsPage";
import Header from "../components/Header";


export default function RootLayout() {

    
    return (
        <div>
            <Header/>
            <Switch>

                <Route path="/website/home" component={HomePage} />
                <Route path="/website/tutors" component={TutorsPage} />
                <Route path="/website/students" component={StudentsPage} />
                <Route path="/website/tutor/:id" component={TutorDetailsPage} />
                <Route path="/website/add-tutor" component={AddTutorPage} />
                <Route path="/website/edit-tutor/:id" component={EditTutorPage} />
                <Route path="/website/add-student" component={AddStudentPage} />
                <Route path="/website/edit-student/:id" component={EditStudentPage} />

                <Redirect to="/website/home" />
            </Switch>

        </div>
    );
}
