export class Reimbursement {
    title: string;
    description: string;
    approved: boolean;
    id: number;
    user_id: number;

    constructor(title: string, description: string, approved: boolean,id: number, user_id: number){
        this.title = title;
        this.description = description;
        this.approved = approved;
        this.id = id;
        this.user_id = user_id;
    }
}