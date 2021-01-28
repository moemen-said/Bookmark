export class author{
    id: string;
    authorName: string;
    gender:gender;
    nationality:string;
    noOfBooks:number;
    rate:number;
    profilePicLink:string;
}

export class authorReview {
    authorId: string;
    reviewerId: string;
    date: string;
    reviewRate: string;
    review: string;
} 

export enum gender{
    male = "male",
    female = "female",
}