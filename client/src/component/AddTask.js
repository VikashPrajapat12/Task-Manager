import { useState } from "react";
import { Container, Alert, Row, Col, Form, Button, Toast } from "react-bootstrap";
import { saveTask } from "../services/TaskService";
import { message } from "antd";
import { useNavigate } from "react-router-dom";




export function Addtask() {
    const [formdata, seformdata] = useState({})

    const handleChange = (e) => {
        seformdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
            e.preventDefault()
            const response = await saveTask(formdata)
            message.success("Task Added Successfully")
            navigate('/task-list')
            console.log(response.data);
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
        </>
    )
}