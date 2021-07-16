import React from "react";
import { Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


export default function HomePage() {

    return (
        <>
            <Container>
                <Row className="justify-content-center m-3">
                    <Col xs="3">
                        <h1>HOME PAGE </h1>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs="3">
                        <Card>
                            <CardImg top width="100%" src="https://image.shutterstock.com/image-photo/high-school-tutor-giving-male-600w-1127431355.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">View Tutors</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">View all tutors</CardSubtitle>
                                <CardText>Click the button below to see all available tutors.</CardText>
                                <a className="btn btn-primary" href="/website/tutors" >View Tutors</a >
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="3">
                        <Card>
                            <CardImg top width="100%" src="https://image.shutterstock.com/image-photo/african-american-young-adult-dreads-600w-1670707486.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">View Students</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">View all Students</CardSubtitle>
                                <CardText>Click the button below to see all students.</CardText>
                                <a className="btn btn-primary" href="/website/students" >View Students</a>
                            </CardBody>
                        </Card>
                    </Col>
                        
                </Row>
                <Row className="justify-content-center mt-3">
                    <Col xs="3">
                        <Card>
                            <CardImg top width="100%" src="https://image.shutterstock.com/image-photo/young-indian-teacher-talk-speak-600w-1916410994.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Add New Tutor</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">New tutor</CardSubtitle>
                                <CardText>Click the button below to add a new tutor.</CardText>
                                <a className="btn btn-primary" href="/website/add-tutor" >Add new tutor</a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="3">
                        <Card>
                            <CardImg top width="90%" src="https://image.shutterstock.com/image-photo/homeschool-asian-little-young-girl-600w-1739402348.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Add New Student </CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">New student</CardSubtitle>
                                <CardText>Click the button below to add a new student.</CardText>
                                <a className="btn btn-primary" href="/website/add-student" >Add new student</a>
                            </CardBody>
                        </Card>
                    </Col>
                    
                </Row>

            </Container>
        </>
    )
}