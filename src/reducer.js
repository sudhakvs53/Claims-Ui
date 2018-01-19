export function itemsHaveError(state = false, action) {
  switch (action.type) {
    case 'ITEMS_HAVE_ERROR':
      return action.hasError;
    default:
      return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items;
    default:
      return state;
  }
}

