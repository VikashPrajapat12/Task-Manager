import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://img.icons8.com/color/452/microsoft-to-do-app.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{'  '}
                       Task Manager
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
                            <LinkContainer to='/add-tasks'><Nav.Link>Add-Task</Nav.Link></LinkContainer>
                            <LinkContainer to='/task-list'><Nav.Link>Task-List</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}