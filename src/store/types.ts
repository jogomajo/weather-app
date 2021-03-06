import {
  IAir,
  IAstronomicalData,
  ICityCoords,
  ICurrentWeather,
  ITemperatureInfo,
  IWind,
} from '../interfaces';

export const SET_SEARCHED_CITY = 'SET_SEARCHED_CITY';
export const SET_CITY_COORDS = 'SET_CITY_COORDS';
export const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
export const SET_WIND = 'SET_WIND';
export const SET_AIR = 'SET_AIR';
export const SET_TEMPERATURE_INFO = 'SET_TEMPERATURE_INFO';
export const SET_ASTRONOMICAL_DATA = 'SET_ASTRONOMICAL_DATA';

export interface IGlobalState {
  searchedCityName: string;
  cityCoords: ICityCoords;
  currentWeather: ICurrentWeather;
  wind: IWind;
  air: IAir;
  temperatureInfo: ITemperatureInfo;
  astronomicalData: IAstronomicalData;
}

export interface setSearchedCityAction {
  type: typeof SET_SEARCHED_CITY;
  name: string;
}

export interface setCityCoordsAction {
  type: typeof SET_CITY_COORDS;
  cityCoords: ICityCoords;
}

export interface setCurrentWeatherAction {
  type: typeof SET_CURRENT_WEATHER;
  currentWeather: ICurrentWeather;
}

export interface setWindAction {
  type: typeof SET_WIND;
  wind: IWind;
}

export interface setAirAction {
  type: typeof SET_AIR;
  air: IAir;
}

export interface setTemperatureInfoAction {
  type: typeof SET_TEMPERATURE_INFO;
  temperatureInfo: ITemperatureInfo;
}

export interface setAstronomicalDataAction {
  type: typeof SET_ASTRONOMICAL_DATA;
  astronomicalData: IAstronomicalData;
}

export type GlobalStateActionTypes =
  | setSearchedCityAction
  | setCityCoordsAction
  | setCurrentWeatherAction
  | setWindAction
  | setAirAction
  | setTemperatureInfoAction
  | setAstronomicalDataAction;
