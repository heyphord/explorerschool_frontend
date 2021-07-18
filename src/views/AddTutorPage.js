import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

export default function AddTutorPage() {

    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [email, setEmail] = React.useState();

    const onSubmit = ()=>{

        if(!firstName || !lastName || !email){
            
        }
    }

    return (
        <>
            <Container>
                <h1>Add a new tutor</h1>
                <Form>
                    <FormGroup>
                        <Label for="exampleFname">First Name</Label>
                        <Input type="text" name="exampleFname" id="exampleFname" placeholder="enter first name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleLname">Last Name</Label>
                        <Input type="text" name="exampleLname" id="exampleLname" placeholder="Enter last name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">staff email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    
                    
                    <Button>Submit</Button>
                </Form>
            </Container>
        </>
    )
}