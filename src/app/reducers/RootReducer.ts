import { combineReducers, Reducer } from 'redux';
import { routerReducer } from 'react-router-redux';

export const rootReducer: Reducer<any> = combineReducers<any>({
  router: routerReducer
});
