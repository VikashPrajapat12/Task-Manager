import { useState } from "react";
import { Container, Alert, Row, Col, Form, Button } from 'react-bootstrap'
import { useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { updateTask, updateTaskData } from "../services/TaskService";
import { message } from 'antd'


export function UpdateTask() {
    const [task, setTaskdata] = useState([])
    const [isError, setError] = useState(false)

    useEffect(() => {
        loadtask()
    }, [])

    const { id } = useParams()

    const loadtask = async () => {
        const response = await updateTask(id)
        console.log(response);
        response.data[0].deadline = response.data[0].deadline.split("T")[0]
        setTaskdata(response.data[0])
    }

    const navigateAll = useNavigate()

    const editTask = async (e) => {
        e.preventDefault()
        const response = await updateTaskData(task, id)
        console.log(response);
        message.success("Task Updated Successfully ") || alert("Task Updated Successfully")
        navigateAll('/task-list')
    }


    const handleChange = (e) => {
        setTaskdata({ ...task, [e.target.name]: e.target.value })
        console.log(task);
    }


    return (
        <>
          
        
            <Container className="mt-4 text-center" >
                <Alert variant="info">Update Task</Alert>
            </Container>
            <Container>
                <Form onSubmit={editTask}>

                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} value={task.name} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Description" name="description" onChange={handleChange} value={task.description} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Control type="date" placeholder="Enter Date" name="deadline" onChange={handleChange} value={task.deadline} />

                            </Form.Group>
                        </Col>
                    </Row>
                    <Button  onClick={()=>{
                        navigateAll(-1)         //-1 for back page navigation 
                    }}>Back</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="success" type="submit">Update</Button>
                </Form>
            </Container>
        </>
    )

}

