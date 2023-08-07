import { applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { userReducer } from '@src/modules/UserList/store/reducers/userReducer';

export const rootReducer = combineReducers({
  user: userReducer || (() => null),
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
