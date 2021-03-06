import {
  IGlobalState,
  SET_SEARCHED_CITY,
  SET_CITY_COORDS,
  SET_CURRENT_WEATHER,
  SET_WIND,
  SET_AIR,
  SET_TEMPERATURE_INFO,
  SET_ASTRONOMICAL_DATA,
  GlobalStateActionTypes,
} from './types';

const initialState: IGlobalState = {
  searchedCityName: 'lublin',
  cityCoords: {
    city: 'lublin',
    country: 'PL',
    lon: 51,
    lat: 23,
  },
  currentWeather: {
    temp: 0,
    weatherIcon: '',
    description: '',
    realFeel: 0,
    humidity: 0,
    pressure: 0,
    uvIndex: 1,
  },
  wind: {
    speed: 0,
    direction: '',
    degree: 0,
  },
  air: {
    index: 0,
    pm2_5: 0,
    pm10: 0,
    no2: 0,
    so2: 0,
    o3: 0,
  },
  temperatureInfo: {
    min: 0,
    max: 0,
    avg: 0,
  },
  astronomicalData: {
    sunrise: '',
    sunset: '',
    moonrise: '',
    moonset: '',
  },
};

export const WeatherReducer = (state = initialState, action: GlobalStateActionTypes) => {
  switch (action.type) {
    case SET_SEARCHED_CITY:
      return {
        ...state,
        searchedCityName: action.name,
      };
    case SET_CITY_COORDS:
      const { city, country, lon, lat } = action.cityCoords;
      return {
        ...state,
        cityCoords: {
          city,
          country,
          lon,
          lat,
        },
      };
    case SET_CURRENT_WEATHER:
      const {
        temp,
        weatherIcon,
        description,
        realFeel,
        humidity,
        pressure,
        uvIndex,
      } = action.currentWeather;
      return {
        ...state,
        currentWeather: {
          temp,
          weatherIcon,
          description,
          realFeel,
          humidity,
          pressure,
          uvIndex,
        },
      };
    case SET_WIND:
      const { speed, direction, degree } = action.wind;
      return {
        ...state,
        wind: {
          speed,
          direction,
          degree,
        },
      };
    case SET_AIR:
      const { index, pm2_5, pm10, no2, so2, o3 } = action.air;
      return {
        ...state,
        air: {
          index,
          pm2_5,
          pm10,
          no2,
          so2,
          o3,
        },
      };
    case SET_TEMPERATURE_INFO:
      const { min, max, avg } = action.temperatureInfo;
      return {
        ...state,
        temperatureInfo: {
          min,
          max,
          avg,
        },
      };
    case SET_ASTRONOMICAL_DATA:
      const { sunrise, sunset, moonrise, moonset } = action.astronomicalData;
      return {
        ...state,
        astronomicalData: {
          sunrise,
          sunset,
          moonrise,
          moonset,
        },
      };
    default:
      return state;
  }
};
