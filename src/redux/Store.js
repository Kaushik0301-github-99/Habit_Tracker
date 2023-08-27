import { legacy_createStore as createStore, combineReducers } from "redux";
import { ADD_HABIT, HABIT_STATUS, REMOVE_HABIT } from "./Actions";

const initialState = {
  items: [],
};

const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      console.log(state);
      return { items: [...state.items, action.payload] };
    case REMOVE_HABIT:
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case HABIT_STATUS:
      return editHabit(state, action);
    default:
      return state;
  }
};

const editHabit = (state, action) => {
  const editedItem = state.items.filter(
    (item) => item.id === action.payload.id
  );
  console.log(editedItem);
};

const rootReducer = combineReducers({
  habit: habitReducer,
});

// creating a store
const store = createStore(rootReducer);

export default store;
