import React from "react";
import { Table ,Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner} from 'reactstrap';

//redux
import { useSelector , useDispatch } from "react-redux";
import { deleteStudentMiddleware, getStudentsMiddleware } from "../redux/middleware/StudentMiddleware";
import { deleteStudentSuccess } from "../redux/reducers/StudentReducer";

import { useToasts } from 'react-toast-notifications';

export default function StudentsPage() {

    //toast
    const { addToast } = useToasts();

    const studentState = useSelector( state=> state.student);
    const dispatch = useDispatch();
    const [deleteModal, showDeleteModal] = React.useState(false);

    const [selectedStudent, setSelectedStudent] = React.useState();

    React.useEffect(() => {

        dispatch( getStudentsMiddleware());

    }, [])


    React.useEffect(() => {
        if (studentState.ACTION_TYPE === deleteStudentSuccess.toString()) {

            addToast("Student deleted successfully", { appearance: 'success' });
            dispatch( getStudentsMiddleware());
            showDeleteModal(false)

        }

    }, [studentState.ACTION_TYPE])
 const deleteUser = ()=>{
        dispatch(deleteStudentMiddleware(selectedStudent.id));
    }
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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { studentState.students.map( (student, index)=>
                        <tr>
                            <th scope="row">{student.id} </th>
                            <td> {student.first_name+" "+student.last_name}</td>
                            <td>{student.email}</td>
                            <td>{student.department}</td>
                            <th>
                                <a className="btn btn-primary" href={"/website/edit-student/"+student.id} >Edit</a >
                                <a className="btn btn-danger" onClick={()=>{
                                    showDeleteModal(state=> !state);
                                    setSelectedStudent(student)
                                }}  >Delete</a >
                            </th>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Modal isOpen={deleteModal}  >
                <ModalHeader >Delete this student?</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete {selectedStudent ?selectedStudent.first_name+" "+ selectedStudent.last_name :null} from the database?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={ deleteUser}>{studentState.isDeleteTutorLoading? <Spinner children=""/> : "Yes, Delete"}</Button>{' '}
                    <Button color="secondary" onClick={()=>showDeleteModal(state=> !state)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}