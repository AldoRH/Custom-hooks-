export type AuthAction =
  | { type: 'LOGIN'; payload: { username: string; password: string; token: string } }
  | { type: 'LOGOUT' };