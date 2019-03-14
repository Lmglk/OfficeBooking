import { Room } from '../../app/types/Room';
import { CellType } from '../enums/CellType';

export interface Cell {
    x: number;
    y: number;
    roomId: Room['id'] | null;
    type: CellType;
}
