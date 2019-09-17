import React from 'react';
import classes from './style.module.scss';

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
      <div className={classes.day}>{getDay(datetime)}</div>
      <div className={classes.icon}>
        <img src={icon} alt='weather' />
      </div>
      <div className={classes.temp}>
        {Math.round(min)} / {Math.round(max)}
      </div>
    </div>
  );
};

export default Card;
