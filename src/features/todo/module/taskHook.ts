import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, ParamType, taskRequest } from "features/todo/reducer/taskSlice";

// export function useSuggestion(){
//     const { suggestionLoading } = useSelector((state: RootState) => state.suggestion);
//     const dispatch = useDispatch();
//     const suggestionUser = useCallback((data: SuggestionPayload) => {
//       dispatch(suggestionRequest(data));
//     }, []);
//     return { suggestionLoading, suggestionUser };

//task List
export function useTask(){
    const { taskLoading } = useSelector((state: RootState) => state.task);
    const dispatch = useDispatch();
    const taskList = useCallback((data: ParamType) => {
        dispatch(taskRequest(data));
    }, [])
    return { taskLoading, taskList} 
}