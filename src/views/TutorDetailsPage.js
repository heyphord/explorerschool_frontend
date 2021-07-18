import React from "react";
import { Table } from 'reactstrap';

import {
    useParams
} from "react-router-dom";


//redux
import { useSelector, useDispatch } from "react-redux";
import { getTutorMiddleware } from "../redux/middleware/TutorMiddleware";
import { getStudentsMiddleware } from "../redux/middleware/StudentMiddleware";

export default function TutorDetailsPage() {
    const tutorState = useSelector(state => state.tutor);
    const dispatch = useDispatch();

    let { id } = useParams();

    React.useEffect(() => {
        dispatch(getTutorMiddleware(id));
        dispatch(getStudentsMiddleware());

    }, [])
    return (
        <>
            <h1>TUTOR DETAILS</h1>
            <h4>Tutor id  : {tutorState.tutor.id}</h4>
            <h4>First name: {tutorState.tutor.first_name}</h4>
            <h4>Last name : {tutorState.tutor.last_name}</h4>
            <h4>Email     : {tutorState.tutor.email}</h4> <br />
            <hr/>


            <h5>Students assigned to this tutor:</h5>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(tutorState.tutor.students)?

                        tutorState.tutor.students.length?
                        tutorState.tutor.students.map((student, index) =>
                            <tr>
                                <th scope="row">1</th>
                                <td>{student.id}</td>
                                <td>{student.first_name + " " + student.last_name}</td>
                                <td>{student.email}</td>
                                <td>{student.department}</td>
                            </tr>
                        
                        ):
                        <>
                            <h6>No student has been assign to this tutor yet! Click on the button below to assign student to tutor</h6>
                            <a className="btn btn-primary" href={"/website/edit-tutor/" + id} >Edit Tutor Details</a >
                        </>
                        :
                        null}
                </tbody>
            </Table>

        </>
    )
}