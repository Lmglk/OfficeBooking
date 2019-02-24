import { UserRole } from '../enums/UserRole';

export interface Person {
    id: number;
    name: string;
    role: UserRole;
    email: string;
}
