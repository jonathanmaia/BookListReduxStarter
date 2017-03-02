export function selectBook(book) {
  // selectBook is an actionCreator and needs to return an action,
  // an object with type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
