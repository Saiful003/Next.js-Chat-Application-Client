import { useAppDispatch, useAppSelector } from "./redux-hooks/tsVersionHooks";
import { switchTheme } from "../features/themeSlice";

export const useTheme = () => {
  const {
    siteTheme: { isLightTheme },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  //dispatch actions
  const handleSwitchTheme = () => {
    dispatch(switchTheme());
  };

  return { isLightTheme, handleSwitchTheme };
};
