import React from 'react';
import GifList from '../components/GifList';
import { Card, Accordion } from 'react-bootstrap';

const MainPage = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Popular
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <GifList items={[1, 2, 3, 4]} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default MainPage;
