export class Reimbursement {
    title: string;
    description: string;
    approved: boolean;
    user_id: number;

    constructor(title: string, description: string, approved: boolean, user_id: number){
        this.title = title;
        this.description = description;
        this.approved = approved;
        this.user_id = user_id;
    }
}