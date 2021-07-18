import React from "react";
import { Table } from 'reactstrap';

//redux
import { useSelector , useDispatch } from "react-redux";
import { getStudentsMiddleware } from "../redux/middleware/StudentMiddleware";

export default function StudentsPage() {

    const studentState = useSelector( state=> state.student);
    const dispatch = useDispatch();

    React.useEffect(() => {

        dispatch( getStudentsMiddleware());

    }, [])
    return (
        <>
            <h1>GET ALL STUDENTS</h1>
            <Table striped>
                <thead>
                    <tr>
                        <th>Staff Id</th>
                        <th>Full Name</th>
                        <th>Student Email</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    { studentState.students.map( (student, index)=>
                        <tr>
                            <th scope="row">{student.id} </th>
                            <td> {student.first_name+" "+student.last_name}</td>
                            <td>{student.email}</td>
                            <td>{student.department}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    )
}