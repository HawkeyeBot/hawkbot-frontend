import { atom } from "recoil";

const errorAtom = atom({
  key: "errorAtomState",
  default: null,
});

export default errorAtom;
