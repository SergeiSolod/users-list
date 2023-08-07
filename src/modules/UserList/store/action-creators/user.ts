import { IUser, UserAction } from '@src/modules/UserList/types/user';
import { UserActionConstants } from '@src/modules/UserList/constants/constants';
import { Dispatch } from 'redux';
import { usersApi } from '@src/modules/UserList/api/usersApi';
import { RootState } from '@src/store';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionConstants.ADD_USERS });

      const response = await usersApi.getUsersData();

      setTimeout(() => {
        dispatch({
          type: UserActionConstants.ADD_USERS_SUCCESS,
          payload: response.data,
        });
      }, 500);

    } catch (e) {
      dispatch({
        type: UserActionConstants.ADD_USERS_ERROR,
        payload: 'An error occurred while loading users',
      });
    }
  };
};

export const deleteUser = (id: number) => {
  return async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
    dispatch({
      type: UserActionConstants.DELETE_USER,
      payload: getState().user.users.filter((user: IUser) => user.id !== id),
    });
  };
};

export const resetUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionConstants.RESET_USERS });
  };
};

export const closeInfo = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionConstants.CLOSE_INFO });
  };
};
