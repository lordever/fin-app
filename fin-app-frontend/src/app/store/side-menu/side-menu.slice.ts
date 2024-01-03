import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SideMenuState {
    active: boolean;
}

const initialState: SideMenuState = {
    active: false,
};

const sideMenuSlice = createSlice({
    name: 'sideMenu',
    initialState,
    reducers: {
        toggle: (state) => {
            state.active = !state.active;
        }
    },
});

export const { toggle } = sideMenuSlice.actions;

export default sideMenuSlice.reducer;