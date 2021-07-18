import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  ACTION_TYPE: "",

  isGetStudentsLoading: false,
  isGetStudentLoading: false,
  isCreateStudentLoading: false,
  isUpdateStudentLoading: false,
  isDeleteStudentLoading: false,
  
  
  getStudentsMessage: "",
  getStudentMessage: "",
  createStudentMessage: "",
  updateStudentMessage: "",
  deleteStudentMessage: "",

  students: [],
  student: {},
  


}

export const counterSlice = createSlice({
  name: 'student',
  initialState: INITIAL_STATE,
  reducers: {

    //get all students 
    getStudentsStart: state => {
      state.ACTION_TYPE = getStudentsStart.toString();
      state.isGetStudentsLoading = true;
      state.getStudentsMessage = "";
      state.students=[];
  },

  getStudentsSuccess: (state, action) => {
      state.ACTION_TYPE = getStudentsSuccess.toString();
      state.isGetStudentsLoading = false;
      state.students = action.payload;
  },

  getStudentsError: (state, action) => {
      state.ACTION_TYPE = getStudentsError.toString();
      state.isGetStudentsLoading = false;
      state.getStudentsMessage = action.payload.message;
  },

    //get 1 student 
    getStudentStart: state => {
      state.ACTION_TYPE = getStudentStart.toString();
      state.isGetStudentLoading = true;
      state.getStudentMessage = "";
      state.student={};
  },

  getStudentSuccess: (state, action) => {
      state.ACTION_TYPE = getStudentSuccess.toString();
      state.isGetStudentLoading = false;
      state.student = action.payload;
  },

  getStudentError: (state, action) => {
      state.ACTION_TYPE = getStudentError.toString();
      state.isGetStudentsLoading = false;
      state.getStudentMessage = action.payload.message;
  },


    //create student
    createStudentStart: state => {
      state.ACTION_TYPE = createStudentStart.toString();
        state.isCreateStudentLoading = true;
        state.createStudentMessage = "";
    },

    createStudentSuccess: (state, action) => {
      state.ACTION_TYPE = createStudentSuccess.toString();
      state.isCreateStudentLoading = false;
      state.student = action.payload;

    },

    createStudentError: (state, action) => {
        state.ACTION_TYPE = createStudentError.toString();
        state.isCreateStudentLoading = false;
        state.createStudentMessage = action.payload.message;
    },

    //update student
    updateStudentStart: state => {
      state.ACTION_TYPE = updateStudentStart.toString();
        state.isUpdateStudentLoading = true;
        state.updateStudentMessage = "";
    },

    updateStudentSuccess: (state, action) => {
      state.ACTION_TYPE = updateStudentSuccess.toString();
      state.isUpdateStudentLoading = false;
      state.student = action.payload;

    },

    updateStudentError: (state, action) => {
        state.ACTION_TYPE = updateStudentError.toString();
        state.isUpdateStudentLoading = false;
        state.updateStudentMessage = action.payload.message;
    },
    
    //delete student
    deleteStudentStart: state => {
      state.ACTION_TYPE = deleteStudentStart.toString();
        state.isDeleteStudentLoading = true;
        state.deleteStudentMessage = "";
    },

    deleteStudentSuccess: (state, action) => {
      state.ACTION_TYPE = deleteStudentSuccess.toString();
      state.isDeleteStudentLoading = false;
      state.deleteStudentMessage = action.payload.message;


    },

    deleteStudentError: (state, action) => {
        state.ACTION_TYPE = deleteStudentError.toString();
        state.isDeleteStudentLoading = false;
        state.deleteStudentMessage = action.payload.message;
    },

    //reset action
    resetActionType: state => {
      state.ACTION_TYPE = resetActionType.toString();
    },

  }
})

// Action creators are generated for each case reducer function
export const
  {
    getStudentsStart, getStudentsSuccess, getStudentsError,
    getStudentStart, getStudentSuccess, getStudentError,
    createStudentStart, createStudentSuccess, createStudentError,
    updateStudentStart, updateStudentSuccess, updateStudentError,
    deleteStudentStart, deleteStudentSuccess, deleteStudentError,
   
    resetActionType
  } = counterSlice.actions

export default counterSlice.reducer