import React from 'react';
import GifCard from './GifCard';
import ApiKey from '../ApiKey';

const GifList = ({ length = 0, items = [] }) => {
  return (
    <div className="GifList">
      {items.map((item) => {
        return <GifCard />;
      })}
    </div>
  );
};

export default GifList;
