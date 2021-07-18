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
            <h3>Tutor id: {tutorState.tutor.id}</h3>
            <h3>First name: {tutorState.tutor.first_name}</h3>
            <h3>Last name: {tutorState.tutor.last_name}</h3>
            <h3>Email: {tutorState.tutor.email}</h3>
            <h3>Students</h3>

            {/* {tutorState.tutor.students.map((student, index) =>
                < div className="m-5">
                    {student.first_name } <br/>
                    {student.last_name}<br/>
                    {student.email}<br/>

                </div>
            )} */}

        </>
    )
}