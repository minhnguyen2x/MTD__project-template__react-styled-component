import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import * as intl from './model/intl';
import * as search from './model/search';
console.log('src/store/index.ts');

const sagaMiddleWare = createSagaMiddleWare();
const reducer = combineReducers({
  intl: intl.intlSlice.reducer,
  search: search.searchReducer,
});
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];
export const store = configureStore({
  reducer,
  devTools: true,
  middleware,
});
const listWatcherSaga = [search.watcherSaga];
listWatcherSaga.forEach((watcherSaga) => sagaMiddleWare.run(watcherSaga));
/////types
export type RootState = ReturnType<typeof store.getState>;
