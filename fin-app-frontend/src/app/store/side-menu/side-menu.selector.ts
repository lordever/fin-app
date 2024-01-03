import { RootState } from '../store';

export const selectSideMenuActive = (state: RootState) => state.sideMenu.active;