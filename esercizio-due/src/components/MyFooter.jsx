import { Navbar, Container} from "react-bootstrap";
const MyFooter=()=>{
    return(
<Navbar bg="dark" variant="dark" fixed="bottom" >
        <Container fluid="sm">
          <Navbar.Brand href="#home" ><small>StriveBooks - The Best Book Shop</small></Navbar.Brand>
          
        </Container>
      </Navbar>
    )
}
export default MyFooter