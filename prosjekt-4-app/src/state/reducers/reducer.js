//Reducer for entire site, simplifying store access
const reducer = (state = {
    drawerStatus: false,
    searchWord: "",
    menus: [],
    category: [],
    sortCategory: "",
    sortValue: null,
    status: "",
    first: 9,
    offset: 0,
    count:0,
    error: []
  }, action) => {
  switch (action.type) {
    case "SIDEMENU":
      return state = {
        ...state,
        drawerStatus: action.payload
      };
    case "PAGINATION":
      return state = {
        ...state,
        offset: action.payload
      };
    case "SEARCHWORD":
      return state = {
        ...state,
        searchWord: action.payload
      };
    case "MENU_REQUESTED":
      return state = {
        ...state,
        status: "menu waiting"
      };
    case "MENU_RECEIVED":
      return state = {
        ...state,
        menus: action.payload.data.menu.menus,
        count: action.payload.data.menu.count,
        status: "menu received"
      };
    case "MENU_FAILED":
      return state = {
        ...state,
        error: action.payload,
        status: "menu failed"
      };
    case "RATING_REQUESTED":
      return state = {
        ...state,
        status: "rating waiting"
      };
    case "RATING_RECEIVED":
      return state = {
        ...state,
        menus: action.payload,
        status: "rating received"
      };
    case "RATING_FAILED":
      return state = {
        ...state,
        error: action.payload,
        status: "rating failed"
      };
    case "CATEGORY_CHECK":
      return state = {
        ...state,
        category: [...state.category, action.payload]
      };
    case "CATEGORY_UNCHECK":
      const newCategories = state.category.filter(category => category !== action.payload);
      return state = {
        ...state,
        category: newCategories
      };
    case "SORT":
      return state = {
        ...state,
        sortCategory: action.payload.sortCategory,
        sortValue: action.payload.sortValue
      };
    default:
      return state;
  }
  };
  
  export default reducer;
  