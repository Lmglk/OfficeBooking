import { CellType } from '../enums/CellType';
import { Place } from '../../app/types/Place';

export interface Cell {
    x: number;
    y: number;
    placeId: Place['id'] | null;
    type: CellType;
}
