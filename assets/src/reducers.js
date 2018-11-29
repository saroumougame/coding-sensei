import { combineReducers } from 'redux';

import themeReducer from './reducers/theme.reducer';
import layoutReducer from './reducers/layout.reducer';
import customReducer from './reducers/custom.reducer';
import authReducer   from './reducers/authentification.reducer';

// Combine with other reducers we may add in the future
const todoApp = combineReducers({
  theme: themeReducer,
  layout: layoutReducer,
  customData: customReducer,
  authData: authReducer,
});

export default todoApp;
