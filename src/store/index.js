import { createStore, compose } from 'redux';
import rootReducer from './reducers';

const configureStore = () => {

  const composeEnhancer = process.env.NODE_ENV !== 'production' && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

  const store = createStore(rootReducer, composeEnhancer());

  if (module.hot) {
    module.hot.accept(() => {});
  }
  return store;
};

const store = configureStore();
export default store;
