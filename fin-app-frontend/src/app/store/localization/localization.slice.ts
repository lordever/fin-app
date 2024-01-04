import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Locale} from "@/app/types/dictionary.model";

interface LocalizationState {
    locale: Locale;
}

const initialState: LocalizationState = {
    locale: Locale.EN,
};

export enum LocalizationActions {
    SET_LOCALE = "localization/setLocale"
}

const localizationSlice = createSlice({
    name: 'localization',
    initialState,
    reducers: {
        setLocale: (state, action: PayloadAction<Locale>) => {
            state.locale = action.payload;
        }
    },

});

export const {setLocale} = localizationSlice.actions;

export default localizationSlice.reducer;