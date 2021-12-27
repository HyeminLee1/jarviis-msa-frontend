import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, SuggestionPayload, suggestionRequest, SuggestionResultPayload, suggestionResultRequest
} from "../reducer/suggestionSlice";

export function useSuggestion(){
  const { suggestionLoading } = useSelector((state: RootState) => state.suggestion);
  const dispatch = useDispatch();
  const suggestionUser = useCallback((data: SuggestionPayload) => {
    dispatch(suggestionRequest(data));
  }, []);
  return { suggestionLoading, suggestionUser };
}

  export function useSuggestionResult(){
    const { suggestionLoading } = useSelector((state: RootState) => state.suggestion);
    const dispatch = useDispatch();

    const result = useCallback((data: SuggestionResultPayload) => {
      dispatch(suggestionResultRequest(data))
    }, [])
  return { suggestionLoading, result };
  }