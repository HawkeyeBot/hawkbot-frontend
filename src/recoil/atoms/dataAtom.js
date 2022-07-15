import { atom } from "recoil";

const dataAtom = atom({
  key: "dataAtomState",
  default: {
    balance: {},
    positions: {},
    resources: {},
    status: {
      status: "OFF",
    },
    version: {},
    refreshTime: null,
    open_orders: {},
    latest_orders: [],
    api_weight: {
      last: 0,
      max: 0,
    },
  },
});

export default dataAtom;
