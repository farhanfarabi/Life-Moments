import { combineReducers } from 'redux';

import posts from './posts';
import auth from './authentication';

export const reducers = combineReducers({ posts, auth });