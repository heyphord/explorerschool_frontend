import { combineReducers } from 'redux';
import AuthenticateReducer from "../reducers/AuthenticateReducer";
import TeamReducer from "../reducers/TeamReducer";

export default combineReducers(
    {
      authenticate: AuthenticateReducer,
      team: TeamReducer,
      
    //   navigation: NavigationReducer,
      
    }
  );