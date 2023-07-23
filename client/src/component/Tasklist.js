import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteTask, getTaskFromServer, markAsCompleted, UpdateTask } from '../services/TaskService'
import { updateTask } from "./UpdateTask";
import { Spin } from "antd";

export function Tasklist() {
    const [tasklist, setTasklist] = useState([])
    const [isDataFetched, setFetchedData] = useState(false)


    const fetchTasks = async (url) => {
        const response = await getTaskFromServer(url)
        setTasklist(response.data)
        setFetchedData(true)
        console.log(response.data);
    }

    useEffect(() => {
        fetchTasks('all')
    }, [])

    return (
        <>
            <Container className="mt-4 text-center">
                <Alert>List of all Tasks</Alert>
            </Container>
            <Container>
                <Dropdown onSelect={(k, e) => {
                    console.log(e.target.innerHTML);
                    fetchTasks(e.target.innerHTML)
                }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select tasks
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >All</Dropdown.Item>
                        <Dropdown.Item >Pending</Dropdown.Item>
                        <Dropdown.Item >Completed</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Row>
                    {isDataFetched ?

                        tasklist.map((item) => {
                            let newarr = item.createdOn.split("T")
                            let arr = newarr[1].split(".")
                            let date = new Date(newarr[0]).toDateString()
                            console.log(arr[0]);
                            return (
                                <Col lg={4}>
                                    <Card className="mt-3 set-card">
                                        <Card.Body>
                                            <Alert variant={item.isCompleted ? "success" : "danger"}>{item.isCompleted ? "Completed" : "Pending"}</Alert>
                                            {
                                                item.isCompleted ?
                                                    <>
                                                        <Card.Title>{item.name}</Card.Title>
                                                        <Card.Text>{item.description}</Card.Text>
                                                        <Card.Text>{date + "  " + arr[0]}</Card.Text>

                                                        &nbsp;

                                                        <Button variant="danger btn-sm" onClick={async () => {
                                                            await deleteTask(item._id)
                                                            fetchTasks('all')
                                                        }}>Delete</Button>

                                                        &nbsp; &nbsp; &nbsp;

                                                        <Link to={`/update-task/${item._id}`}><Button variant="secondary btn-sm" onClick={() => {

                                                        }}>Edit</Button>
                                                        </Link>
                                                    </>
                                                    :
                                                    <>
                                                        <Card.Title>{item.name}</Card.Title>
                                                        <Card.Text>{item.description}</Card.Text>
                                                        <Card.Text>{date + "  " + arr[0]}</Card.Text>
                                                        <Button variant="success btn-sm" onClick={async () => {
                                                            await markAsCompleted(item._id)
                                                            fetchTasks('all')
                                                        }}>Complete</Button>

                                                        &nbsp; &nbsp; &nbsp;

                                                        <Button variant="danger btn-sm" onClick={async () => {
                                                            await deleteTask(item._id)
                                                            fetchTasks('all')
                                                        }}>Delete</Button>

                                                        &nbsp; &nbsp; &nbsp;

                                                        <Link to={`/update-task/${item._id}`}><Button variant="secondary btn-sm" onClick={() => {

                                                        }}>Edit</Button>
                                                        </Link>
                                                    </>
                                            }
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                        : <Spin tip="Loading" size="large" className="mt-4"> </Spin>
                    }

                </Row>
            </Container>
        </>
    )
}
