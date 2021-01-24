import {Menus} from './types';

export const FETCH_DAY_MENUS = "FETCH_DAY_MENUS";
export const fetchDayMenusAction = (menus: Menus) => {
  return {
    type: "FETCH_DAY_MENUS",
    payload: {
      fitItems: menus.fitItems,
      partsId: menus.partsId,
      data: menus.date,
      days: menus.days,
    }
  };
};

export const EMPTY_MENUS = "EMPTY_MENUS";
export const emptyMenusAction = (menus: Menus) => {
  return {
    type: "EMPTY_MENUS",
    payload: {
      fitItems: [],
      partsId: [],
      date: menus.date,
    },
  };
};
