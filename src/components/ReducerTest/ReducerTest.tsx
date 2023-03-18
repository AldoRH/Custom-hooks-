import { AuthState } from "../../interface/AuthState";
import { AuthAction } from "../../interface/AuthAction";

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
    return {
    username: action.payload.username,
    password: action.payload.password,
    token: action.payload.token,
    isLoggedIn: true,
    };
    case 'LOGOUT':
    return { username: null, password: null, token: null, isLoggedIn: false };
    default:
    return state;
  }
  };


