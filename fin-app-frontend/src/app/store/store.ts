import { configureStore } from '@reduxjs/toolkit';
import sideMenuSlice from "@/app/store/side-menu/side-menu.slice";

export const store = configureStore({
    reducer: {
        sideMenu: sideMenuSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;