export function addFavorite(favorite) {
  return { type: "ADD_FAVORITE", favorite };
}

export function deleteFavorite(favorite) {
  return { type: "DELETE_FAVORITE", favorite };
}
