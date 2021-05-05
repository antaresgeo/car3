import { list, create } from "../Services";
import types from "./types";

const ListUsers = (page: number) => {
    return (dispatch: Function) => {
        dispatch({
            type: types.LISTAR_USUARIOS.default,
            payload: null
        })
        list(page)
            .then((response) => {
                dispatch({
                    type: types.LISTAR_USUARIOS.success,
                    payload: response.data || []
                })
            })
            .catch((e) => {
                dispatch({
                    type: types.LISTAR_USUARIOS.fail,
                    payload: [],
                    error: e
                })
            });
    }
  
};

const CreateUser = (name: string, job: string ) => {
    return (dispatch: Function) => {
        dispatch({
            type: types.CREAR_USUARIOS.default,
            payload: null
        })
        create(name, job)
            .then((response) => {
                dispatch({
                    type: types.CREAR_USUARIOS.success,
                    payload: response.data || []
                })
            })
            .catch((e) => {
                dispatch({
                    type: types.CREAR_USUARIOS.fail,
                    payload: [],
                    error: e
                })
            });
    }
};

const actions = {
    ListUsers,
    CreateUser,
}

export default actions;
