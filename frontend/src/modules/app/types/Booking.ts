export interface Booking {
    id: number;
    from: Date;
    to: Date;
    approved: boolean;
    placeId: number;
    userId: number;
}
