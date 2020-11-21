export class Review {
    [key: string]: any
    author: string;
    body: string;
    id: number;
    publish_date: Date | string;
    rating: number;
}