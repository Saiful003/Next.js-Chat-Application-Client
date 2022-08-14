import { useAppDispatch, useAppSelector } from "./redux-hooks/tsVersionHooks";
import { addUser } from "../features/authSlice";

export const useAuth = () => {
  const {
    siteAuth: { user, profileTheme },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  //functios
  const handleAddUser = (username: string, color: string) => {
    dispatch(
      addUser({
        username,
        color,
      })
    );
  };

  return {
    handleAddUser,
    user,
    profileTheme,
  };
};
