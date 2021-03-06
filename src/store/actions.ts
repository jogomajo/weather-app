import {
  IAir,
  IAstronomicalData,
  ICityCoords,
  ICurrentWeather,
  ITemperatureInfo,
  IWind,
} from '../interfaces';
import {
  SET_SEARCHED_CITY,
  SET_CITY_COORDS,
  SET_CURRENT_WEATHER,
  SET_WIND,
  SET_AIR,
  SET_TEMPERATURE_INFO,
  SET_ASTRONOMICAL_DATA,
} from '../store/types';

export const setCityName = (name: string) => {
  return {
    type: SET_SEARCHED_CITY,
    name,
  };
};

export const setCityCoords = (cityCoords: ICityCoords) => {
  return {
    type: SET_CITY_COORDS,
    cityCoords,
  };
};

export const setCurrentWeather = (currentWeather: ICurrentWeather) => {
  return {
    type: SET_CURRENT_WEATHER,
    currentWeather,
  };
};

export const setWind = (wind: IWind) => {
  return {
    type: SET_WIND,
    wind,
  };
};

export const setAir = (air: IAir) => {
  return {
    type: SET_AIR,
    air,
  };
};

export const setTemperatureInfo = (temperatureInfo: ITemperatureInfo) => {
  return {
    type: SET_TEMPERATURE_INFO,
    temperatureInfo,
  };
};

export const setAstronomicalData = (astronomicalData: IAstronomicalData) => {
  return {
    type: SET_ASTRONOMICAL_DATA,
    astronomicalData,
  };
};
