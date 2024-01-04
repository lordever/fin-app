import {configureStore} from '@reduxjs/toolkit';
import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import sideMenuSlice from "@/app/store/side-menu/side-menu.slice";
import localizationSlice from "@/app/store/localization/localization.slice";
import Cookies from "js-cookie";
import {Locale, LOCALE_COOKIE_NAME} from "@/app/types/dictionary.model";

const preloadedState = {
    localization: {
        locale: Cookies.get(LOCALE_COOKIE_NAME) as Locale || Locale.EN
    }
};
export const store = configureStore({
    reducer: {
        sideMenu: sideMenuSlice,
        localization: localizationSlice
    },
    preloadedState
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;