import { Action } from "../Components/list";
import types from "./types";

const inicialState = {
  list: [],
  list_is_loading: false,
  page: null,
  per_page: null,
  total: null,
  total_pages: null,
  error: null,
};

const reducer = (state = inicialState, action: Action) => {
  switch (action.type) {
    case types.LISTAR_USUARIOS.default:
      return {
        ...state,
        list_is_loading: true,
      };
    case types.LISTAR_USUARIOS.success:
      return {
        ...state,
        list_is_loading: false,
        list: action.payload.data,
        page: action.payload.page,
        per_page: action.payload.per_page,
        total: action.payload.total,
        total_pages: action.payload.total_pages,
      };
    case types.LISTAR_USUARIOS.fail:
      return {
        ...state,
        list_is_loading: false,
        list: [],
        error: action.error
      };
    default:
      return state;
  }
};
export default reducer;
