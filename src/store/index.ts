import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { WeatherReducer } from './reducer';

export type AppState = ReturnType<typeof WeatherReducer>;

export default function configureStore() {
  const store = createStore(WeatherReducer, composeWithDevTools());

  return store;
}
