import React from "react";
import { Button, Form, FormGroup, Label, Input, Container ,Spinner } from 'reactstrap';
import {  useToasts } from 'react-toast-notifications';

//redux
import { useSelector , useDispatch } from "react-redux";
import { createStudentMiddleware } from "../redux/middleware/StudentMiddleware";
import { createStudentError, createStudentSuccess ,resetActionType } from "../redux/reducers/StudentReducer";

export default function AddStudentPage() {

    //redux
    const studentState = useSelector( state=> state.student);
    const dispatch = useDispatch();

    //toast
    const { addToast } = useToasts();

    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [email, setEmail] = React.useState();
    const [department, setDepartment] = React.useState();

    const onSubmit = ()=>{

        if(!firstName || !lastName || !email || !department){

            addToast("Fields cannot be empty", { appearance: 'error' });
            return;

        }else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

            addToast("Please enter a valid email address", { appearance: 'error' })
            return;
          }

          dispatch( createStudentMiddleware( firstName,lastName, email ,department))
    }

    React.useEffect(() => {
        if (studentState.ACTION_TYPE === createStudentSuccess.toString()) {
          
            addToast("Student Added successfully", { appearance: 'success' });

            setFirstName("");
            setLastName("");
            setEmail("");
            setDepartment("");
    
        } else if (studentState.ACTION_TYPE === createStudentError.toString()) {
          addToast("Error Adding student", { appearance: 'error' })
    
        }
        dispatch( resetActionType())
    
    
      }, [studentState.ACTION_TYPE]);

    return (
        <>
            <Container>
                <h1>Add a new student</h1>
                <Form>
                    <FormGroup>
                        <Label for="exampleFname">First Name</Label>
                        <Input  value={firstName} onChange={ e => setFirstName(e.target.value)} type="text" name="exampleFname" id="exampleFname" placeholder="enter first name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleLname">Last Name</Label>
                        <Input value={lastName} onChange={ e => setLastName(e.target.value)} type="text" name="exampleLname" id="exampleLname" placeholder="Enter last name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">staff email</Label>
                        <Input value={email} onChange={ e => setEmail(e.target.value)} type="email" name="email" id="exampleEmail" placeholder="Enter email" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">Department</Label>
                        <Input value={department} onChange={ e => setDepartment(e.target.value)} type="email" name="department" id="exampleEmail" placeholder="Enter department" />
                    </FormGroup>
                    
                    
                    <Button onClick={onSubmit}>
                        {studentState.isCreateStudentLoading?
                        <Spinner children=""/>:
                        "Add new student"
                    }
                    </Button>
                </Form>
            </Container>
        </>
    )
}