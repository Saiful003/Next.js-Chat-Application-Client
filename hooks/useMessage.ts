import { useAppDispatch, useAppSelector } from "./redux-hooks/tsVersionHooks";
import { setMessage, clearInput } from "../features/messageSlice";
export function useMessage() {
  const {
    userMessage: { message },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  // functions
  const handleSetMessage = (value: string) => {
    dispatch(setMessage(value));
  };

  const handleClearInput = () => {
    dispatch(clearInput());
  };

  return {
    message,
    handleSetMessage,
    handleClearInput,
  };
}
