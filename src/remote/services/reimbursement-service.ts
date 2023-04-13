import { authAppClient } from "../authenticated-app-client"

export const getReimbursements = async () => {
    return await authAppClient.get('/reimbursements');
}

export const deleteReimbursement = async (id:number) => {
    return await authAppClient.delete(`/reimbursements/${id}`);
}

export const updateReimbursement = async (id:number) => {
    return await authAppClient.put(`/reimbursements/${id}`);
}