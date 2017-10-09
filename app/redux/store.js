import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import logger from 'redux-logger';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(logger, sagaMiddleware), autoRehydrate());

sagaMiddleware.run(sagas);

function onRehydrate() {
  // Uygulama açıldığında geçmiş statein yüklendiği yer
  const currentState = store.getState();
}

persistStore(store, { storage: AsyncStorage }, onRehydrate);

// Hot reloading fix for redux
if (module.hot) {
  module.hot.accept(() => {
    store.replaceReducer(reducers);
  });
}
export default store;
