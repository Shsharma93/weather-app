import React from 'react';
import classes from './minMaxTemp.module.scss';

const MinMaxTemp = ({ max, min }) => (
  <div className={classes.wrapper}>
    <div className={classes.min}>{`${min}°`}</div>
    <div>{`${max}°`}</div>
  </div>
);

export default MinMaxTemp;
