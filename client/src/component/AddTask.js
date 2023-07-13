import { useState } from "react";
import { Container, Alert, Row, Col, Form, Button } from "react-bootstrap";
import { saveTask } from "../services/TaskService";


export function Addtask() {
    const [formdata, seformdata] = useState({})
    const [istask, setistask] = useState(false)
    const [isError, setisError] = useState(false)

    const handleChange = (e) => {
        seformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await saveTask(formdata)
        console.log(response.data);
        if (response.status == 200) {
            setistask(true)
            setTimeout(() => {
                setistask(false)
            }, 2000);

        }
        else {
            setisError(true)
        }
    }

    return (
        <>
            <Container className="mt-4 text-center" >
                <Alert variant="info">Add New Task</Alert>
            </Container>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Description" name="description" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="date" name="deadline" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="success" type="submit">Create Task</Button>
                </Form>
            </Container>
            {
                istask ? <Container className="mt-4">
                    <Col lg={4}>
                        <Alert>Task Created Successfully...</Alert>
                    </Col>
                </Container> : null
            }
            {
                isError ? <Container className="mt-4">
                    <Col lg={4}>
                        <Alert>Error in creating task...please try later</Alert>
                    </Col>
                </Container> : null
            }
        </>
    )
}