import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function ItemCard({ item }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{item.price}</ListGroupItem>
        <ListGroupItem>{item.condition}</ListGroupItem>
        <ListGroupItem>{item.quantity}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
