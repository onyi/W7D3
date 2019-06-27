// External Import 
import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from '../middleware/thunk_middleware';
// Local Import 
import rootReducer from '../reducers/root_reducer';


export const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);
