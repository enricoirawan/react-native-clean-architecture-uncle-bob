import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserPayload } from '../payload/UserPayload';
import { RootState } from '../store';

export interface UserState {
    token: string;
    username: string;
}

const initialState: UserState = {
    token: '',
    username: ''
};

export const UserSlice = createSlice({
    name: 'USER_SLICE',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IUserPayload>) => {
            state.token = action.payload.token;
            state.username = action.payload.username;
        },
        logout: (state) => {
            state.token = '';
            state.username = '';
        }
    }
});

export const { login, logout } = UserSlice.actions;

export const currentUser = (state: RootState) => state.UserReducer;

export default UserSlice.reducer;
