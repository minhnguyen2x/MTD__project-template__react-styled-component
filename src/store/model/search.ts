import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { createModuleAction, createSagaHandler } from '../../utils/reduxTools';

import { fetchSearch } from '../../services/search';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '..';

interface SearchState {
  searchKeyword: string;
  searchResults: [];
}

export type SearchResult = any;

console.log('store/model/search.ts outside');
///
const moduleName = 'Search';
export const fetchSearchAction = createModuleAction(moduleName, 'fetchSearch');
console.log(
  'store/model/search.ts outside createModuleAction',
  fetchSearchAction,
);
///init state

const initialState: SearchState = {
  searchKeyword: '',
  searchResults: [],
};

// ///reducer
export const searchReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchSearchAction.success, (state, action) => {
    state.searchKeyword = action.payload.searchKeyword;
    state.searchResults = action.payload.searchResults;
  });
  builder.addCase(fetchSearchAction.error, (state, action) => {
    state.searchKeyword = action.payload.searchKeyword;
    state.searchResults = [];
  });
});

//// saga handler

const fetchSearchSagaHandler = function* ({
  type,
  payload,
}: {
  type: string;
  payload: string;
}) {
  const searchKeyword = payload;
  try {
    const searchResults: [] = yield call(fetchSearch, searchKeyword);
    yield put(fetchSearchAction.success({ searchKeyword, searchResults }));
  } catch (error) {
    console.error(error);
    yield put(fetchSearchAction.error({ searchKeyword, searchResults: [] }));
  }
};

/// watcher saga

export const watcherSaga = function* () {
  yield takeLatest(fetchSearchAction.request.type, fetchSearchSagaHandler);
};

export const useStates = () => {
  const { searchKeyword, searchResults } = useSelector(
    (state: RootState) => state.search,
  );
  return { searchKeyword, searchResults };
};

export const useActions = () => {
  const dispatch = useDispatch();
  const fetchSearch = (searchKeyword: string): void => {
    dispatch(fetchSearchAction.request(searchKeyword));
  };
  return { fetchSearch };
};
