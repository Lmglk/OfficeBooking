import { Room } from '../../app/types/Room';

export interface Cell {
    x: number;
    y: number;
    roomId: Room['id'] | null;
    isUsed: boolean;
    isAvailable: boolean;
}
