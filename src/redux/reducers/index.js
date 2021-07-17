import { combineReducers } from 'redux';
import TutorReducer from "./TutorReducer";

export default combineReducers(
    {
      tutor: TutorReducer,
      
    }
  );