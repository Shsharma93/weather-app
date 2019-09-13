import React from 'react';
import classes from './city.module.scss';

const City = ({ name }) => {
  return <div className={classes.header}>{name}</div>;
};

export default City;
