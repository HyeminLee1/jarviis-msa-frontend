import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, SuggestionPayload, suggestionRequest, SuggestionResultPayload, suggestionResultRequest
} from "../reducer/suggestionSlice";

export default function useSuggestion(){
  const { suggestionLoading } = useSelector((state: RootState) => state.suggestion);
  const dispatch = useDispatch();

  const suggestion = useCallback( (data: SuggestionPayload) => {
    dispatch(suggestionRequest(data));
  }, []);
  
  const result = useCallback((data: SuggestionResultPayload) => {
    dispatch(suggestionResultRequest(data))
  }, [])

  return { suggestionLoading, suggestion, result };

}