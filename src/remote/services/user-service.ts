import { authAppClient } from "../authenticated-app-client";



export const createUser = async (username: string, password: string) => {
    return await authAppClient.post(`/users`,{
        username: username,
        password: password,
        approved: false
    })
}

