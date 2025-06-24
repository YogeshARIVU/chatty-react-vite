import { jwtDecode } from 'jwt-decode';

const TOKEN_KEY = 'chat_token';

export const saveToken = token => localStorage.setItem(TOKEN_KEY, token);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const removeToken = () => localStorage.removeItem(TOKEN_KEY);

export const isAuthenticated = () => {
    const token = getToken();
    if (!token) return false;
    try {
        const { exp } = jwtDecode(token);
        return exp * 1000 > Date.now(); // not expired
    } catch {
        return false;
    }
};

export const getUsername = () => {
    const token = getToken();
    return token ? jwtDecode(token).sub : null;
};
