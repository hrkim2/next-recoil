import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const inputState = atom({
  key: "inputState",
  default: "",
});

export const countInputState = selector({
  key: "countInputState",
  get: ({ get }) => {
    return `${get(countState)} / ${get(inputState)}`;
  },
  set: ({ set }, newValue) => {
    if (newValue === "") {
      set(
        inputState,
        document.querySelector("#stateInput").value + " from 검색"
      );
    } else {
      set(inputState, newValue);
    }
  },
});
