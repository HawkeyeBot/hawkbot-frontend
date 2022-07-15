import { atom } from "recoil";

const loadingAtom = atom({
  key: "loadingAtomState",
  default: false,
});

export default loadingAtom;
