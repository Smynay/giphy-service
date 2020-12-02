import React from 'react';
import { Card } from 'react-bootstrap';

const GifCard = () => {
  return (
    <Card className="bg-dark text-white mt-4" style={{ width: '18rem' }}>
      <Card.Img
        src="https://media0.giphy.com/media/3o7aCSvvG4PY8ApMWY/giphy.gif?cid=2087e75a58lc71raalaqiwx72gfihlvbr973swese3zncfbg&rid=giphy.gif"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default GifCard;
