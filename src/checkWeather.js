const getWeather = data => {
  if (data.weather.icon === 'c01d') return 'https://bit.ly/webApp_Assets_sunny';
  if (data.weather.icon.charAt(0) === 'c')
    return 'https://bit.ly/webApp_Assets_cloudy';
  if (data.weather.icon.charAt(0) === 't')
    return 'https://bit.ly/webApp_Assets_thunderStorm';
  if (data.weather.icon.charAt(0) === 'r')
    return 'https://bit.ly/webApp_Assets_rain';
  if (data.weather.icon.charAt(0) === 's')
    return 'https://bit.ly/webApp_Assets_snow';
  else return 'https://bit.ly/webApp_Assets_sunny';
};

export default getWeather;
