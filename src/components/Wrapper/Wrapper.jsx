import React from 'react';
import classes from './wrapper.module.scss';
import City from '../City/City';
import Buttons from '../Buttons/Buttons';
import MainTemp from '../MainTemp/MainTemp';
import MinMaxTemp from '../MinMaxTemp/MinMaxTemp';
import WeatherType from '../WeatherType/WeatherType';
import Cards from '../Cards/Cards';
import axios from 'axios';
import checkWeather from '../../functions/checkWeather';

class Wrapper extends React.Component {
  state = {
    cities: [
      { name: 'Sydney', lat: '-33.8688', lon: '151.2093', data: null },
      { name: 'Brisbane', lat: '-27.4698', lon: '153.0251', data: null },
      { name: 'Melbourne', lat: '-37.8136', lon: '144.9631', data: null },
      { name: 'Snowy Mountains', lat: '-36.5000', lon: '148.3333', data: null }
    ],
    index: 0
  };

  componentDidMount() {
    const data = this.state.cities.map(city => {
      axios
        .get(
          `http://api.weatherbit.io/v2.0/forecast/daily?lat=${city.lat}&lon=${city.lon}&key=fe1108eec4684d488029f25744d4ef03`
        )
        .then(result => {
          city.data = result.data.data.slice(0, 6);
        })
        .catch(err => console.log(err.message));
      return city;
    });

    this.setState({ cities: data });
  }

  handleNext = () => {
    const { index, cities } = this.state;
    this.setState({ index: index === cities.length - 1 ? 0 : index + 1 });
    console.log(cities);
  };

  handlePrev = () => {
    const { index, cities } = this.state;
    this.setState({ index: index === 0 ? cities.length - 1 : index - 1 });
  };

  render() {
    const { cities, index } = this.state;
    return (
      <div className={classes.wrapper}>
        <City name={cities[index].name} />
        <Buttons
          next={this.handleNext}
          prev={this.handlePrev}
          icon={cities[index].data ? checkWeather(cities[index].data[0]) : ''}
        />
        <MainTemp temp={cities[index].data ? cities[index].data[0].temp : ''} />
        <MinMaxTemp
          max={cities[index].data ? cities[index].data[0].max_temp : ''}
          min={cities[index].data ? cities[index].data[0].min_temp : ''}
        />
        <WeatherType
          type={
            cities[index].data ? cities[index].data[0].weather.description : ''
          }
        />
        <Cards data={cities[index].data} />
      </div>
    );
  }
}

export default Wrapper;
