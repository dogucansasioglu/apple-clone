import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface BasketState {
  items: Product[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);

      // const index = state.items.findIndex(
      //   (item) => item._id === action.payload
      // );
      // let newBasket = [...state.items];
      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn(
      //     `Can't remove product (id: ${action.payload}) as it's not in basket!`
      //   );
      // }
      // state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// SELECTORS - This is how we pull information from the Global store slice
export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketItemsWithId = (state: RootState, id: string) =>
  state.basket.items.filter((item) => item._id === id);
export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
