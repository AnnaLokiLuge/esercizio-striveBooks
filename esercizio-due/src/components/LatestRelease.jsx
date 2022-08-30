import Card from "react-bootstrap/esm/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";

import { Component } from "react";
class LatestRelease extends Component {
  render() {
    return (
      <Container className="justify-content-center">
        <div className="text-center my-3">
          <h3 id="libriFantasy">Libri fantasy</h3>
        </div>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              {fantasy.map((book, i) => (
                <Card key={book.asin}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Genere: {book.category}. Prezzo: {book.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          ))}
        </Row>


        <div className="text-center my-3">
          <h3 id="libriStorici">Libri Storici</h3>
        </div>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              {history.map((book, i) => (
                <Card key={book.asin}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Genere: {book.category}. Prezzo: {book.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          ))}
        </Row>


        <div className="text-center my-3">
          <h3 id="libriHorror">Libri Horror</h3>
        </div>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              {horror.map((book, i) => (
                <Card key={book.asin}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Genere: {book.category}. Prezzo: {book.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          ))}
        </Row>

        <div className="text-center my-3">
          <h3 id="romanzi">Romanzi</h3>
        </div>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              {romance.map((book, i) => (
                <Card key={book.asin}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Genere: {book.category}. Prezzo: {book.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          ))}
        </Row>

        <div className="text-center my-3">
          <h3 id="libriSciFi">Libri Sci-Fi</h3>
        </div>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              {scifi.map((book, i) => (
                <Card key={book.asin}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Genere: {book.category}. Prezzo: {book.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          ))}
        </Row>

      </Container>
    );
  }
}
export default LatestRelease;
