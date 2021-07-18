import React from "react";
import { 
    Button, Form, FormGroup, Label, Input, Container, Spinner } from 'reactstrap';
import { useToasts } from 'react-toast-notifications';
import {
    useParams
} from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getStudentMiddleware, updateStudentMiddleware } from "../redux/middleware/StudentMiddleware";
import { updateStudentError, updateStudentSuccess, resetActionType, getStudentSuccess } from "../redux/reducers/StudentReducer";

export default function EditStudentPage(props) {

    //redux
    const studentState = useSelector(state => state.student);
    const dispatch = useDispatch();

    let { id } = useParams();

    //toast
    const { addToast } = useToasts();

    const [firstName, setFirstName] = React.useState(studentState.student.first_name);
    const [lastName, setLastName] = React.useState(studentState.student.last_name);
    const [email, setEmail] = React.useState(studentState.student.email);
    const [department, setDepartment] = React.useState(studentState.student.department);


    const onSubmit = () => {

        if (!firstName || !lastName || !email || !department) {

            addToast("Fields cannot be empty", { appearance: 'error' });
            return;

        } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

            addToast("Please enter a valid email address", { appearance: 'error' })
            return;
        }

        dispatch(updateStudentMiddleware(id, firstName, lastName ,email , department));
    }

    React.useEffect(() => {
        if (studentState.ACTION_TYPE === updateStudentSuccess.toString()) {

            addToast("Student updated successfully", { appearance: 'success' });


        } else if (studentState.ACTION_TYPE === updateStudentError.toString()) {
            addToast("Error Adding student", { appearance: 'error' })

        } else if (studentState.ACTION_TYPE === getStudentSuccess.toString()) {
            setFirstName(studentState.student.first_name);
            setLastName(studentState.student.last_name);
            setEmail(studentState.student.email);
            setDepartment(studentState.student.department);
        }
        dispatch(resetActionType())


    }, [studentState.ACTION_TYPE]);

    React.useEffect(() => {
        dispatch(getStudentMiddleware(id));
    }, []);

    return (
        <>
            <Container>
                <h1>Edit student</h1>
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
                    <FormGroup>
                        <Label for="exampleLname">Department</Label>
                        <Input value={department} onChange={e => setDepartment(e.target.value)} type="text" name="exampleLname" id="exampleLname" placeholder="Enter last name" />
                    </FormGroup>


                    <Button onClick={onSubmit}>
                        {studentState.isCreateStudentLoading ?
                            <Spinner children="" /> :
                            "Edit student"
                        }
                    </Button>
                </Form>
            </Container>

            
        </>
    )
}