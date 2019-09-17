import React from 'react';
import classes from './style.module.scss';

const MinMaxTemp = ({ max, min }) => (
  <div className={classes.wrapper}>
    <div className={classes.min}>{`${Math.round(min)}°`}</div>
    <div>{`${Math.round(max)}°`}</div>
  </div>
);

export default MinMaxTemp;
