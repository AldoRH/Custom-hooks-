export interface AuthState {
    username: string | null;
    password: string | null;
    token: string | null;
    isLoggedIn: boolean;
    }