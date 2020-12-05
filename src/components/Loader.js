import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      paddingTop: '1rem',
      paddingBottom: '1rem',
    }}
  >
    <Spinner animation="grow" variant="info" />
    <Spinner animation="grow" variant="info" />
    <Spinner animation="grow" variant="info" />
  </div>
);

export default Loader;
