import { authAppClient } from "../authenticated-app-client";

export const getListReimbursement = async () => {
    return await authAppClient.get(`/reimbursements`);
}

export const createReimburse = async (title: string, description: string) => {
    return await authAppClient.post(`/reimbursements/new/`,{
        title: title,
        description: description,
        approved: false
    })
}

export const updateReimburse = async (title: string, description: string, id: number) => {
    return await authAppClient.put(`/reimbursements/${id}`, {
        title: title,
        description: description,
        approved: false
    })
}
export const approveReimburse = async (id: number) => {
    return await authAppClient.put(`/reimbursements/${id}`, {
        approved: true
    })
}
export const denyReimburse = async (id: number) => {
    return await authAppClient.put(`/reimbursements/${id}`, {
        approved: false
    })
}
// export const updateReimburseManager = async (title: string, description: string, id: number, approved: boolean) => {
//     return await authAppClient.put(`/reimbursements/${id}`, {
//         title: title,
//         description: description,
//         approved: approved
//     })
// }

export const deleteReimburse = async (id: number) => {
    return await authAppClient.delete(`/reimbursements/${id}`)
}