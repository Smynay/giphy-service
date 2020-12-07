import React from 'react';
import { Card } from 'react-bootstrap';

const GifCard = ({ item }) => {
  return (
    <Card
      className="d-inline-block bg-dark text-white"
      style={{
        minWidth: '10rem',
        maxWidth: '9rem',
      }}
    >
      <Card.Img src={item} alt="Card image" />
    </Card>
  );
};

export default GifCard;
