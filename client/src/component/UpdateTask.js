import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findById, UpdateTheTask } from "../services/TaskService";

export function UpdateTask() {
    const [form, setform] = useState({})
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    // const [deadline, setdeadline] = useState("")

    const params = useParams()      // to get id from params

    useEffect(() => {
        taskupdate()
    }, [])

    const taskupdate = async () => {
        const response = await findById(params.id)
        setname(response.data.name)
        setdescription(response.data.description)
        console.log(response.data);
    }

    const setformdata = () => {
        setform({ name: name, description: description })
    }

    const ShowForm = () => {
        console.log(form);
    }

    const updateTask = async (e) => {
        e.preventDefault()
        console.warn(name, description);
        const response = await UpdateTheTask(params.id, form)
        console.log(response);
        setformdata()
    }


    return (
        <>
            <Container className="mt-4 text-center" >
                <Alert variant="info">Update Task</Alert>
            </Container>
            <Container>
                <Form>

                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" value={name} onChange={(e) => { setname(e.target.value) }} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Description" name="description" value={description} onChange={(e) => { setdescription(e.target.value) }} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="date" placeholder="Enter Date" name="deadline" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="success" type="submit" onClick={updateTask}>Update</Button>
                    <Button onClick={ShowForm}>Check</Button>
                </Form>
            </Container>
        </>
    )
}

