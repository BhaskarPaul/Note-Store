export const todos = (state = null, action) => {
  switch (action.type) {
    case "SHOW":
      state = action.payload;
      return state;
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      state = state.filter((todo, idx) => todo._id !== action.payload);
      return state;
    case "EDIT":
      state = state.map((todo) => {
        if (todo._id === action.payload._id) {
          todo = action.payload;
          return todo;
        }
        return todo;
      });
      return state;
    default:
      return state;
  }
};
