import React from 'react';
import classes from './style.module.scss';

const MainTemp = ({ temp }) => (
  <div className={classes.main}>{`${Math.round(temp)}°`}</div>
);

export default MainTemp;
