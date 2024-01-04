import {AppThunk} from "@/app/store/store";
import {Locale, LOCALE_COOKIE_NAME} from "@/app/types/dictionary.model";
import Cookies from "js-cookie";
import {LocalizationActions} from "@/app/store/localization/localization.slice";

export const setLocaleThunk = (locale: Locale): AppThunk => (dispatch) => {
    if (Object.values(Locale).includes(locale)) {
        Cookies.set(LOCALE_COOKIE_NAME, locale, {path: '/'});
        dispatch({type: LocalizationActions.SET_LOCALE, payload: locale});
    } else {
        console.error("Invalid locale was passed to setLocaleThunk:", locale)
    }
};