import React from "react";
import { Table,Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';

//redux
import { useSelector , useDispatch } from "react-redux";
import { deleteTutorMiddleware, getTutorsMiddleware } from "../redux/middleware/TutorMiddleware";
import { deleteTutorSuccess } from "../redux/reducers/TutorReducer";

import { useToasts } from 'react-toast-notifications';

export default function TutorsPage() {

    //toast
    const { addToast } = useToasts();

    const tutorState = useSelector( state=> state.tutor);
    const dispatch = useDispatch();
    const [deleteModal, showDeleteModal] = React.useState(false);

    const [selectedTutor, setSelectedTutor] = React.useState();

    React.useEffect(() => {
        if (tutorState.ACTION_TYPE === deleteTutorSuccess.toString()) {

            addToast("Tutor deleted successfully", { appearance: 'success' });
            dispatch( getTutorsMiddleware());
            showDeleteModal(false)

        }

    }, [tutorState.ACTION_TYPE])

    React.useEffect(() => {

        dispatch( getTutorsMiddleware());

    }, [])

    const deleteUser = ()=>{
        dispatch(deleteTutorMiddleware(selectedTutor.id));
    }
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
                                <a className="btn btn-primary" href={"/website/edit-tutor/"+tutor.id} >Edit</a >
                                <a className="btn btn-danger" onClick={()=>{
                                    showDeleteModal(state=> !state);
                                    setSelectedTutor(tutor)
                                }}  >Delete</a >
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <Modal isOpen={deleteModal}  >
                <ModalHeader >Delete this tutor?</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete {selectedTutor ?selectedTutor.first_name+" "+ selectedTutor.last_name :null} from the database?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={ deleteUser}>{tutorState.isDeleteTutorLoading? <Spinner children=""/> : "Yes, Delete"}</Button>{' '}
                    <Button color="secondary" onClick={()=>showDeleteModal(state=> !state)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}