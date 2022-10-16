import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface BasketState {
  items: ProductObj[];
}

const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      let notNewItem = false;
      const mutatedItems = state.items.map((i) => {
        if (i.product._id === item._id) {
          i.quantity++;
          notNewItem = true;
        }
        return i;
      });
      if (notNewItem) {
        state.items = mutatedItems;
      } else {
        state.items.push({ product: item, quantity: 1 });
      }
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const itemExists = state.items.find((i) => i.product._id === id);
      if (itemExists) {
        state.items = state.items.filter((i) => i.product._id !== id);
      }
    },
    // have a reducer for setting the quantity of an item in the basket
    setQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const mutatedItems = state.items.map((i) => {
        if (i.product._id === id) {
          i.quantity = quantity;
        }
        return i;
      });
      state.items = mutatedItems;
    },
  },
});

export const { addToBasket, removeFromBasket, setQuantity } =
  basketSlice.actions;

// SELECTORS - This is how we pull information from the Global store slice
export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketItemsWithId = (state: RootState, id: string) => {
  return state.basket.items.find((i) => i.product._id === id);
};
export const selectBasketTotal = (state: RootState) => {
  return state.basket.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
};
export const selectBasketLength = (state: RootState) => {
  return state.basket.items.length;
};

export default basketSlice.reducer;
