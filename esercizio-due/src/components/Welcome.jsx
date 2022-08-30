import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Jumbotron from "react-bootstrap/esm/Jumbotron";
const Welcome = () => {
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                <Jumbotron fluid>

                    <div className="text-center my-3" id="home">
                        <h1>Un fantastico bookshop per ogni esigenza</h1>
                        <p>
                            scopri la nostra vasta libreria
                        </p>
                        <p ><a className="btn btn-outline-dark" href="#libriFantasy">Fantasy</a> <a className="btn btn-outline-dark"  href="#libriStorici">Storici</a> <a className="btn btn-outline-dark" href="#libriHorror">Horror</a> <a className="btn btn-outline-dark"  href="#romanzi">Romanzi</a> <a className="btn btn-outline-dark"  href="#libriSciFi">Sci-Fi</a></p>
                    </div>
                </Jumbotron>
                </Col>
            </Row>
        </Container >
    )
};
export default Welcome;
