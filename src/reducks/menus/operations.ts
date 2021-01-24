import { db, FirebaseTimestamp } from "../../firebase/index";
import { fetchDayMenusAction, emptyMenusAction } from "./actions";
import { push } from "connected-react-router";
import {Dispatch} from 'redux';
import {Item} from './types';

const usersRef = db.collection("users");

export const fetchDayMenus = (uid: string, dateId: string, days: Date) => {
  return async (dispatch: Dispatch) => {
    const snapshot = await usersRef
      .doc(uid)
      .collection("dayMenus")
      .doc(dateId)
      .get();

    if (!snapshot.exists) {
      dispatch(
        emptyMenusAction({
          date: "",
          days: days,
          fitItems: [],
          partsId: []
        })
      );
    } else {
      const data = snapshot.data();
      if (data) {
        dispatch(fetchDayMenusAction({
          fitItems: data.fitItems,
          partsId: data.partsId,
          date: data.date,
          days: data.days,
        }));
      }
    }
  };
};

export const saveDayMenus = (date: string, items: Item[], days: Date, uid: string, dateId: string) => {
  return async (dispatch: Dispatch) => {
    const timestamp = FirebaseTimestamp.now();
    const partsArr: string[] = [];
    items.map((value) => {
      if (!value.part) {
        return false;
      }
      return partsArr.push(value.part);
    });

    // db.collection("users").doc(uid).collection("dayMenus")

    const newData = {
      created_at: timestamp,
      date: date,
      days: days,
      fitItems: items,
      partsId: partsArr,
      update_at: timestamp,
    };

    await usersRef
      .doc(uid)
      .collection("dayMenus")
      .doc(dateId)
      .set(newData, { merge: true })
      .then(() => {
        dispatch(fetchDayMenusAction({
          fitItems: items,
          partsId: partsArr,
          date: date,
          days: days,
        }));
        dispatch(push("/"));
      });

  };
};
