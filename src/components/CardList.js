import React from 'react';
import Card from './Card';

const CardList = ({ robots, error }) => {
  return (
    <div>
      {error && <h2>{error.message}</h2>}
      {robots.map((robot) => (
        <Card {...robot} key={robot.id} />
      ))}
    </div>
  );
};

export default CardList;
