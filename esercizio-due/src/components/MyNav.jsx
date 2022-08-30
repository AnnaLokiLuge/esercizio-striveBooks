import { Navbar,Nav} from "react-bootstrap";

const MyNav = (props) => {
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
        <Navbar.Brand href="#home">StriveBooks - {props.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#browse">Browse</Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
    </Navbar>);
    }
export default MyNav
