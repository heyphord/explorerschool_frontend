import React from "react";
import { Table } from 'reactstrap';

//redux
import { useSelector , useDispatch } from "react-redux";
import { getTutorsMiddleware } from "../redux/middleware/TutorMiddleware";

export default function TutorsPage() {

    const tutorState = useSelector( state=> state.tutor);
    const dispatch = useDispatch();

    React.useEffect(() => {

        dispatch( getTutorsMiddleware());

    }, [])
    return (
        <>
            <h1>GET ALL TUTORS</h1>
            <Table striped>
                <thead>
                    <tr>
                        <th>Staff Id</th>
                        <th>Full Name</th>
                        <th>Staff Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { tutorState.tutors.map( (tutor, index)=>
                        <tr>
                            <th scope="row"><a href={"/website/tutor/"+tutor.id}>{tutor.id}</a> </th>
                            <td> <a href={"/website/tutor/"+tutor.id}>{tutor.first_name} {tutor.last_name}</a> </td>
                            <td>{tutor.email}</td>
                            <td>
                                <a className="btn btn-primary" href="/website/edit-tutor/" >Edit</a >
                                <a className="btn btn-danger" href="/website/tutors" >Delete</a >
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
}