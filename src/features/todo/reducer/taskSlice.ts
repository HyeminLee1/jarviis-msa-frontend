import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

//받아오는 데이터//
export interface taskListDataPayload {
  data:[
    id: number,
    user_id: number,
    created: string,
    update: string,
    classification: string,
    type: string,
    title: string,
    start: string,
    end: string,
    location: string,
    completion: string,
    description: string
  ]
}



//요청하는 데이터
export interface taskPayload {
  user_id: number;
}


//미들웨어
export interface taskState {
  taskLoading: boolean;
  taskData: any;
  error: any;
}

// api의 param 타입
export interface ParamType {
  date: string;
}
const initialState: taskState = {
  taskLoading : false,
  taskData: null,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {

    //suggestion
    taskRequest(state: taskState, _action: PayloadAction<ParamType>) {
      state.taskLoading = true;
      state.error = null;
    },

    taskSuccess(state: taskState, action: PayloadAction<taskListDataPayload>) {
      state.taskLoading = false;
      state.taskData = action.payload;
    },

    taskFailure(state: taskState, action: PayloadAction<{ error: any }>) {
      state.taskLoading = true;
      state.error = action.payload;
    },

  }
})

const store = configureStore({
  reducer: {
      task: taskSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
const { reducer, actions } = taskSlice;

export const {
  taskRequest,
  taskSuccess,
  taskFailure
} = actions;

export default reducer;
    

