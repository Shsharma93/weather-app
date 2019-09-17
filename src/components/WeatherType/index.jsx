import React from 'react';
import classes from './style.module.scss';

const WeatherMainIcon = ({ type }) => (
  <div className={classes.title}>{type}</div>
);

export default WeatherMainIcon;
