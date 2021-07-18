import React from "react";
import {
    Button, Form, FormGroup, Label, Input, Container, Spinner
} from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
import {
    useParams
} from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { assignStudentToTutorMiddleware, getTutorMiddleware, updateTutorMiddleware } from "../redux/middleware/TutorMiddleware";
import { updateTutorError, updateTutorSuccess, resetActionType, getTutorSuccess, assignStudentToTutorError, assignStudentToTutorSuccess } from "../redux/reducers/TutorReducer";

export default function EditTutorPage(props) {

    //redux
    const tutorState = useSelector(state => state.tutor);
    const studentState = useSelector(state => state.student);
    const dispatch = useDispatch();

    let { id } = useParams();

    //toast
    const { addToast } = useToasts();

    const [firstName, setFirstName] = React.useState(tutorState.tutor.first_name);
    const [lastName, setLastName] = React.useState(tutorState.tutor.last_name);
    const [email, setEmail] = React.useState(tutorState.tutor.email);
    
    const [selectedStudent, setSelectedStudent] = React.useState();




    const onSubmit = () => {

        if (!firstName || !lastName || !email) {

            addToast("Fields cannot be empty", { appearance: 'error' });
            return;

        } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

            addToast("Please enter a valid email address", { appearance: 'error' })
            return;
        }

        dispatch(updateTutorMiddleware(id, firstName, lastName, email))
    }

    const onAssignToTutor = () => {
        if (selectedStudent==-1) {

            addToast("Please select a student from the dropdown", { appearance: 'error' });
            return;

        } 

        dispatch(assignStudentToTutorMiddleware(id, selectedStudent));
    }

    React.useEffect(() => {
        if (tutorState.ACTION_TYPE === updateTutorSuccess.toString()) {

            addToast("Tutor updated successfully", { appearance: 'success' });


        } else if (tutorState.ACTION_TYPE === updateTutorError.toString()) {
            addToast("Error Adding tutor", { appearance: 'error' })

        } else if (tutorState.ACTION_TYPE === getTutorSuccess.toString()) {
            setFirstName(tutorState.tutor.first_name);
            setLastName(tutorState.tutor.last_name);
            setEmail(tutorState.tutor.email);
        }else if (tutorState.ACTION_TYPE === assignStudentToTutorSuccess.toString()) {
            addToast("Student assigned to this tutor", { appearance: 'success' })

        }else if (tutorState.ACTION_TYPE === assignStudentToTutorError.toString()) {
            addToast("Error assigning student to to this tutor", { appearance: 'error' })

        }
        dispatch(resetActionType())


    }, [tutorState.ACTION_TYPE]);

    React.useEffect(() => {
        dispatch(getTutorMiddleware(id));
    }, []);

    const renderOptions = () => {

        return (
            <Input onChange={(e) => { setSelectedStudent(e.target.value); }} type="select" name="select" id="exampleSelect">
                <option value={-1}>--Select--</option>

                {studentState.students.map((student, index) =>
                    <option value={student.id}>{student.first_name + " " + student.last_name}</option>

                )}

            </Input>)

    }

    return (
        <>
            <Container>
                <h1>Edit tutor</h1>
                <Form>
                    <FormGroup>
                        <Label for="exampleFname">First Name</Label>
                        <Input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" name="exampleFname" id="exampleFname" placeholder="enter first name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleLname">Last Name</Label>
                        <Input value={lastName} onChange={e => setLastName(e.target.value)} type="text" name="exampleLname" id="exampleLname" placeholder="Enter last name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">staff email</Label>
                        <Input value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>


                    <Button onClick={onSubmit}>
                        {tutorState.isCreateTutorLoading ?
                            <Spinner children="" /> :
                            "Edit tutor"
                        }
                    </Button>
                </Form>
                <hr className="m-5" />
                <Form>
                    <FormGroup>
                        <Label for="exampleSelect">Select student from the drop down and assing to tutor</Label>
                        {renderOptions()}
                        <Button onClick={onAssignToTutor}>
                            {tutorState.isAssignStudentToTutorLoading ?
                                <Spinner children="" /> :
                                "Assign this student to tutor"
                            }
                        </Button>
                    </FormGroup>
                </Form>
            </Container>


        </>
    )
}