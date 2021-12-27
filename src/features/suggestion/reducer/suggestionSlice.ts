import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

//받아오는 데이터//
export interface SuggestionListDataPayload {
  data:[{
    suggestion_id: number
    user_id: number
    contents: string,
    location: string,
    routine: string,
    start: string,
    end: string,
    classification: string,
    type: string
  }]
}



//요청하는 데이터
export interface SuggestionPayload {
  user_id: number;
}

export interface SuggestionResultPayload {
  data : {
    suggestion_id: number
    user_id: number
    contents: string,
    location: string,
    routine: string,
    start: string,
    end: string,
    classification: string,
    type: string
  }
}


//미들웨어
export interface SuggsetionState {
  suggestionLoading: boolean;
  suggestionData: any;
  error: any;
}

// api의 param 타입
export interface ParamType {
  id: number;
}
const initialState: SuggsetionState = {
  suggestionLoading : false,
  suggestionData: null,
  error: null,
};

const suggestionSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {

    //suggestion
    suggestionRequest(state: SuggsetionState, _action: PayloadAction<SuggestionPayload>) {
      // alert(`2. 슬라이스 :: data:: ${_action.payload.user_id}`)
      state.suggestionLoading = true;
      state.error = null;
    },

    suggestionSuccess(state: SuggsetionState, action: PayloadAction<SuggestionListDataPayload>) {
      // alert(`슬라이스 success ::: ${JSON.stringify(action.payload)}`)
      state.suggestionLoading = false;
      state.suggestionData = action.payload;
    },

    suggestionFailure(state: SuggsetionState, action: PayloadAction<{ error: any }>) {
      state.suggestionLoading = true;
      state.error = action.payload;
    },

    //suggestionResult
    suggestionResultRequest(state: SuggsetionState, _action: PayloadAction<SuggestionResultPayload>) {
      state.suggestionLoading = true;
      state.error = null;
    },

    suggestionResultSuccess(state: SuggsetionState, action: PayloadAction<SuggestionResultPayload>) {
      state.suggestionLoading = false;
      state.suggestionData = action.payload;
    },

    suggestionResultFailure(state: SuggsetionState, action: PayloadAction<{ error: any }>) {
      state.suggestionLoading = false;
      state.error = action.payload;
    },
  }
})

const store = configureStore({
  reducer: {
      suggestion: suggestionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
const { reducer, actions } = suggestionSlice;

export const {
  suggestionRequest,
  suggestionSuccess,
  suggestionFailure,
  suggestionResultRequest,
  suggestionResultSuccess,
  suggestionResultFailure
} = actions;

export default reducer;
    

