import React from "react";
import { Button, Form, FormGroup, Label, Input, Container ,Spinner } from 'reactstrap';
import {  useToasts } from 'react-toast-notifications';

//redux
import { useSelector , useDispatch } from "react-redux";
import { createTutorMiddleware } from "../redux/middleware/TutorMiddleware";
import { createTutorError, createTutorSuccess ,resetActionType } from "../redux/reducers/TutorReducer";

export default function AddTutorPage() {

    //redux
    const tutorState = useSelector( state=> state.tutor);
    const dispatch = useDispatch();

    //toast
    const { addToast } = useToasts();

    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [email, setEmail] = React.useState();

    const onSubmit = ()=>{

        if(!firstName || !lastName || !email){

            addToast("Fields cannot be empty", { appearance: 'error' });
            return;

        }else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {

            addToast("Please enter a valid email address", { appearance: 'error' })
            return;
          }

          dispatch( createTutorMiddleware( firstName,lastName))
    }

    React.useEffect(() => {
        if (tutorState.ACTION_TYPE === createTutorSuccess.toString()) {
          
            addToast("Tutor Added successfully", { appearance: 'success' });

            setFirstName("");
            setLastName("");
            setEmail("");
    
        } else if (tutorState.ACTION_TYPE === createTutorError.toString()) {
          addToast("Error Adding tutor", { appearance: 'error' })
    
        }
        dispatch( resetActionType())
    
    
      }, [tutorState.ACTION_TYPE]);

    return (
        <>
            <Container>
                <h1>Add a new tutor</h1>
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
                        <Input value={email} onChange={ e => setEmail(e.target.value)} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    
                    
                    <Button onClick={onSubmit}>
                        {tutorState.isCreateTutorLoading?
                        <Spinner children=""/>:
                        "Add new tutor"
                    }
                    </Button>
                </Form>
            </Container>
        </>
    )
}