import { PayloadAction } from "@reduxjs/toolkit";
import { ParamType, taskRequest, taskSuccess, taskFailure, taskListDataPayload } from "features/todo/reducer/taskSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { taskAPI } from "features/todo";


function* taskList(action: PayloadAction<ParamType>){
    try {
        console.log('task saga 감지')
        const result: taskListDataPayload = yield call(
            taskAPI.taskAPI,
            action.payload
        );
        yield put(taskSuccess(result));
        console.log('task saga 실행')
    }
    catch (error:any){
        yield put(taskFailure(error))
    };
}

//   export function* wacthSuggestion(){
//     yield takeLatest(suggestionRequest.type, suggestionUser);
//   }

export function* wathchTaskList(){
    yield takeLatest(taskRequest.type, taskList);
}
