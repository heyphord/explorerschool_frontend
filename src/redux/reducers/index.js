import { combineReducers } from 'redux';
import TutorReducer from "./TutorReducer";
import StudentReducer from "./StudentReducer";

export default combineReducers(
    {
      tutor: TutorReducer,
      student: StudentReducer,
      
    }
  );