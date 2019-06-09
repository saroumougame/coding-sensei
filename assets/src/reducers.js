import { combineReducers } from 'redux';

import themeReducer from './reducers/theme.reducer';
import layoutReducer from './reducers/layout.reducer';
import customReducer from './reducers/custom.reducer';
import authReducer   from './reducers/authentification.reducer';
import userReducer   from './reducers/user.reducer';
import classReducer   from './reducers/classes.reducer';
import eleveReducer   from './reducers/eleves.reducer';
// Combine with other reducers we may add in the future
const todoApp = combineReducers({
  theme: themeReducer,
  layout: layoutReducer,
  customData: customReducer,
  authData: authReducer,
  userData: userReducer,
  classData: classReducer,
  eleveData: eleveReducer
});

export default todoApp;
