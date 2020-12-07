import React from 'react';
import GifCard from './GifCard';
import ApiKey from '../ApiKey';

const GifList = ({ length = 0, items = [] }) => {
  return (
    <div
      className="GifList d-flex container-sm"
      style={{
        gap: '1rem',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      {items.map((item) => {
        return <GifCard item={item} />;
      })}
    </div>
  );
};

export default GifList;
