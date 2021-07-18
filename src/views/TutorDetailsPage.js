import React from "react";
import {
    useParams
} from "react-router-dom";


//redux
import { useSelector, useDispatch } from "react-redux";
import { getTutorMiddleware } from "../redux/middleware/TutorMiddleware";

export default function TutorDetailsPage() {
    const tutorState = useSelector(state => state.tutor);
    const dispatch = useDispatch();

    let { id } = useParams();

    React.useEffect(() => {
        dispatch(getTutorMiddleware(id));

    }, [])
    return (
        <>
            <h1>TUTOR DETAILS</h1>
            <h4>Tutor id: {tutorState.tutor.id}</h4>
            <h4>First name: {tutorState.tutor.first_name}</h4>
            <h4>Last name: {tutorState.tutor.last_name}</h4>
            <h4>Email: {tutorState.tutor.email}</h4> <br/>

            {Array.isArray(tutorState.tutor.students) && tutorState.tutor.students.lenght? 

            tutorState.tutor.students.map((student, index) =>
                < div className="m-5">
                    <h3>Assigned Students</h3>
                    {student.first_name } <br/>
                    {student.last_name}<br/>
                    {student.email}<br/>

                </div>
            )
            :
            <>
                <h6>No student has been assign to this tutor yet! Click on the button below to assign student to tutor</h6>
                <a className="btn btn-primary" href={"/website/edit-tutor/"+id} >Edit Tutor Details</a >
            </>}

        </>
    )
}