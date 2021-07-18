import React from "react";
import { Table } from 'reactstrap';

//redux
import { useSelector , useDispatch } from "react-redux";
// import { getStudentsMiddleware } from "../redux/middleware/StudentMiddleware";

export default function StudentsPage() {

    const studentState = useSelector( state=> state.student);
    const dispatch = useDispatch();

    React.useEffect(() => {

        // dispatch( getStudentsMiddleware());

    }, [])
    return (
        <>
            <h1>GET ALL STUDENTS</h1>
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
                    {/* { studentState.students.map( (student, index)=>
                        <tr>
                            <th scope="row"><a href={"/website/student/"+student.id}>{student.id}</a> </th>
                            <td> <a href={"/website/student/"+student.id}>{student.first_name} {student.last_name}</a> </td>
                            <td>{student.email}</td>
                            <td>
                                <a className="btn btn-primary" href="/website/edit-student/" >Edit</a >
                                <a className="btn btn-danger" href="/website/students" >Delete</a >
                            </td>
                        </tr>
                    )} */}
                </tbody>
            </Table>
        </>
    )
}