import React from 'react';
import classes from './style.module.scss';
import Card from './Card';
import checkWeather from '../../checkWeather';

const Cards = ({ data }) => {
  return (
    <div className={classes.wrapper}>
      {data
        ? data
            .slice(1, 6)
            .map((item, index) => (
              <Card
                key={index}
                min={item.min_temp}
                max={item.max_temp}
                datetime={item.datetime}
                icon={checkWeather(item)}
              />
            ))
        : ''}
    </div>
  );
};

export default Cards;
