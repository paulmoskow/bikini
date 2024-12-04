import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Card {
  id: number;
  name: string;
  picture: string;
  price: number;
  added: boolean;
};

interface CardsState {
  cards: Card[];
};
//check if it is browser, not server-side
const isBrowser = typeof window !== "undefined";
//set localStorage to keep cards locally
const initialState: CardsState = {
  cards: isBrowser? JSON.parse(localStorage.getItem('cards') || '[]') : [],
};

//set reducers to handle cards
const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
      if (isBrowser) {
        localStorage.setItem('cards', JSON.stringify(state.cards));
      }
    },
    addCard: (state, action: PayloadAction<{ id: number; name: string; picture: string; price: number; added: boolean}>) => {
      state.cards = [action.payload , ...state.cards];
      if (isBrowser) {
        localStorage.setItem('cards', JSON.stringify(state.cards));
      }    
    },
    toggleAdded: (state, action: PayloadAction<number>) => {
      const cardId = action.payload;
      const card = state.cards.find((card) => card.id === cardId);
      if(card) {
        card.added = !card.added;
        if (isBrowser) {
          localStorage.setItem('cards', JSON.stringify(state.cards));
        }
      }
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      const cardId = action.payload;
      state.cards = state.cards.filter((card) => card.id !== cardId);
      if (isBrowser) {
        localStorage.setItem('cards', JSON.stringify(state.cards));
      }
    },    
  },
});

export const { setCards, addCard, toggleAdded, deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;