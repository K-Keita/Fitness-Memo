export interface Item {
  name: string;
  part?: string;
}

export interface Menus {
  fitItems: Item[];
  partsId: string[];
  date: string;
  days: Date;
}

export interface StoreState {
  menus: Menus;
}

export interface ActionType {
  type: string;
  payload: Menus;
}
