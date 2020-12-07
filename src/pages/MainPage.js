import React from 'react';
import GifList from '../components/GifList';
import { Card, Accordion } from 'react-bootstrap';

const MainPage = ({ items = [] }) => {
  // const getGifSet

  return (
    <div className="container-sm pt-4">
      <h2 className="text-light">Popular</h2>
      <GifList items={items} />
    </div>
  );
};

export default MainPage;
