import { createStore } from 'redux';
import rootReducer from './redux';
import { loadState, saveState } from './sessionStorage';

const persistedState = loadState();

export default () => {
  const store = createStore(
    rootReducer,
    persistedState,
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    saveState({});
  });

  return store;
};
