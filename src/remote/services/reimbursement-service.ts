import { authAppClient } from "../authenticated-app-client"

export const getListTodos = async (userId: number) => {
    return await authAppClient.get(`/users/${userId}/lists`);
}

export const createList = () => {

}

export const patchList = () => {
    
}