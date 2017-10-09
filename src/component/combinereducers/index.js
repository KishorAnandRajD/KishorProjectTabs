import { combineReducers } from 'redux';
import ReducerWeather from '../weather/reducers/reducer_weather';
import PostsReducer from '../form/reducers/posts_reducer';

import {reducer as formReducer} from 'redux-form';// npm install --save redux-form@6.6.3


const rootReducer = combineReducers({
  weather: ReducerWeather,
  posts:PostsReducer,
  form:formReducer
});

export default rootReducer;
