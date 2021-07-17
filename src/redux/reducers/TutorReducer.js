import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  ACTION_TYPE: "",

  isGetTutorsLoading: false,
  isGetTutorLoading: false,
  isCreateTutorLoading: false,
  isUpdateTutorLoading: false,
  isDeleteTutorLoading: false,
  isAssignStudentToTutorLoading: false,
  
  
  getTutorsMessage: "",
  getTutorMessage: "",
  createTutorMessage: "",
  updateTutorMessage: "",
  deleteTutorMessage: "",
  assignStudentToTutorMessage: "",

  tutors: [],
  tutor: {},
  


}

export const counterSlice = createSlice({
  name: 'tutor',
  initialState: INITIAL_STATE,
  reducers: {

    //get all tutors 
    getTutorsStart: state => {
      state.ACTION_TYPE = getTutorsStart.toString();
      state.isGetTutorsLoading = true;
      state.getTutorsMessage = "";
      state.tutors=[];
  },

  getTutorsSuccess: (state, action) => {
      state.ACTION_TYPE = getTutorsSuccess.toString();
      state.isGetTutorsLoading = false;
      state.tutors = action.payload;
  },

  getTutorsError: (state, action) => {
      state.ACTION_TYPE = getTutorsError.toString();
      state.isGetTutorsLoading = false;
      state.getTutorsMessage = action.payload.message;
  },

    //get 1 tutor 
    getTutorStart: state => {
      state.ACTION_TYPE = getTutorStart.toString();
      state.isGetTutorLoading = true;
      state.getTutorMessage = "";
      state.tutors={};
  },

  getTutorSuccess: (state, action) => {
      state.ACTION_TYPE = getTutorSuccess.toString();
      state.isGetTutorLoading = false;
      state.tutor = action.payload;
  },

  getTutorError: (state, action) => {
      state.ACTION_TYPE = getTutorError.toString();
      state.isGetTutorsLoading = false;
      state.getTutorMessage = action.payload.message;
  },


    //create tutor
    createTutorStart: state => {
      state.ACTION_TYPE = createTutorStart.toString();
        state.isCreateTutorLoading = true;
        state.createTutorMessage = "";
    },

    createTutorSuccess: (state, action) => {
      state.ACTION_TYPE = createTutorSuccess.toString();
      state.isCreateTutorLoading = false;
      state.tutor = action.payload;

    },

    createTutorError: (state, action) => {
        state.ACTION_TYPE = createTutorError.toString();
        state.isCreateTutorLoading = false;
        state.createTutorMessage = action.payload.message;
    },

    //update tutor
    updateTutorStart: state => {
      state.ACTION_TYPE = updateTutorStart.toString();
        state.isUpdateTutorLoading = true;
        state.updateTutorMessage = "";
    },

    updateTutorSuccess: (state, action) => {
      state.ACTION_TYPE = updateTutorSuccess.toString();
      state.isUpdateTutorLoading = false;
      state.tutor = action.payload;

    },

    updateTutorError: (state, action) => {
        state.ACTION_TYPE = updateTutorError.toString();
        state.isUpdateTutorLoading = false;
        state.updateTutorMessage = action.payload.message;
    },
    
    //delete tutor
    deleteTutorStart: state => {
      state.ACTION_TYPE = deleteTutorStart.toString();
        state.isDeleteTutorLoading = true;
        state.deleteTutorMessage = "";
    },

    deleteTutorSuccess: (state, action) => {
      state.ACTION_TYPE = deleteTutorSuccess.toString();
      state.isDeleteTutorLoading = false;
      state.deleteTutorMessage = action.payload.message;


    },

    deleteTutorError: (state, action) => {
        state.ACTION_TYPE = deleteTutorError.toString();
        state.isDeleteTutorLoading = false;
        state.deleteTutorMessage = action.payload.message;
    },

    //assign student to tutor
    assignStudentToTutorStart: state => {
      state.ACTION_TYPE = assignStudentToTutorStart.toString();
        state.isAssignStudentToTutorLoading = true;
        state.assignStudentToTutorMessage = "";
    },

    assignStudentToTutorSuccess: (state, action) => {
      state.ACTION_TYPE = assignStudentToTutorSuccess.toString();
      state.isAssignStudentToTutorLoading = false;
      state.assignStudentToTutorMessage = "";


    },

    assignStudentToTutorError: (state, action) => {
        state.ACTION_TYPE = assignStudentToTutorError.toString();
        state.isAssignStudentToTutorLoading = false;
        state.assignStudentToTutorMessage = action.payload.message;
    },

    //reset password
    resetActionType: state => {
      state.ACTION_TYPE = resetActionType.toString();
    },

  }
})

// Action creators are generated for each case reducer function
export const
  {
    getTutorsStart, getTutorsSuccess, getTutorsError,
    getTutorStart, getTutorSuccess, getTutorError,
    createTutorStart, createTutorSuccess, createTutorError,
    updateTutorStart, updateTutorSuccess, updateTutorError,
    deleteTutorStart, deleteTutorSuccess, deleteTutorError,
    assignStudentToTutorStart, assignStudentToTutorSuccess, assignStudentToTutorError,
   
    resetActionType
  } = counterSlice.actions

export default counterSlice.reducer