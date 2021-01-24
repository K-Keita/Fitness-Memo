export interface Item {
  name: string;
  part?: string;
}

export interface Menu {
  [id: string]: Item[];
  arm: Item[];
  back: Item[];
  chest: Item[];
  reg: Item[];
  shoulder: Item[];
}

export interface Users {
  isSignedIn: boolean;
  role: string;
  uid: string;
  username: string;
  fitMenus: Menu;
}

export interface StoreState {
  users: Users;
}

export interface ActionType {
  type: string;
  payload: Users;
}
