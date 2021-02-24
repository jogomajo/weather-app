export interface ICityCoords {
  city: string;
  country: string;
  lon: number;
  lat: number;
}

export interface ICurrentWeather {
  temp: number;
  weatherIcon: string;
  description: string;
  realFeel: number;
  humidity: number;
  pressure: number;
  uvIndex: number;
}

export interface IWind {
  speed: number;
  direction: string;
  degree: number;
}

export interface ITemperatureInfo {
  min: number;
  max: number;
  avg: number;
}

export interface IAir {
  index: number;
  pm2_5: number;
  pm10: number;
  no2: number;
  so2: number;
  o3: number;
}

export interface IAstronomicalData {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
}
