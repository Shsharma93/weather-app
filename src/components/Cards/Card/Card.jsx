import React from 'react';
import classes from './card.module.scss';
import img from '../../../images/sunny.png';

const Card = ({ min, max, datetime, icon }) => {
  const getDay = datetime => {
    switch (new Date(datetime).getDay()) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      default:
        return 'Day';
    }
  };

  return (
    <div className={classes.card}>
      <div>{getDay(datetime)}</div>
      <img src={icon} alt='weather' />
      <div>{min} / {max}</div>
    </div>
  );
};

export default Card;
