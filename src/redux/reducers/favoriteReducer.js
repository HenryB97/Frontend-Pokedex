export default function favoriteReducer(state = [], action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [...state, { ...action.favorite }];
    case "DELETE_FAVORITE":
      return state.filter((favorite) => favorite.id !== action.favorite.id);
    default:
      return state;
  }
}
