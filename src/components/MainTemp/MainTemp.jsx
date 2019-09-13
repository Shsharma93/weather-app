import React from 'react';
import classes from './maintemp.module.scss';

const MainTemp = ({ temp }) => <div className={classes.main}>{`${temp}°`}</div>;

export default MainTemp;
