import React from 'react';
import classes from './buttons.module.scss';
import leftArrow from '../../images/leftArrow.png';
import rightArrow from '../../images/rightArrow.png';

const Buttons = ({ next, prev, icon }) => (
  <div className={classes.container}>
    <div className={classes.icon}>
      <img src={leftArrow} alt='previous' onClick={prev} />
    </div>
    <div className={classes.weatherMain}>
      <img src={icon} alt='weather' />
    </div>
    <div className={classes.icon}>
      <img src={rightArrow} alt='next' onClick={next} />
    </div>
  </div>
);
export default Buttons;
