import { authAppClient } from "../authenticated-app-client";

export const getListReimbursement = async (userId: number) => {
    return await authAppClient.get(`/reimbursements/show/${userId}`);
}

export const createReimburse = async (title: string, description: string) => {
    return await authAppClient.post(`/reimbursements/new/`,{
        title: title,
        description: description,
        approved: false
    })
}

export const updateReimburse = async (title: string, description: string, id: number) => {
    return await authAppClient.put(`/reimbursements/update/${id}`, {
        title: title,
        description: description
    })
}

export const updateReimburseManager = async (title: string, description: string, id: number, approved: boolean) => {
    return await authAppClient.put(`/reimbursements/update/${id}`, {
        title: title,
        description: description,
        approved: approved
    })
}

export const deleteReimburse = async (id: number) => {
    return await authAppClient.delete(`/reimbursements/delete/${id}`)
}