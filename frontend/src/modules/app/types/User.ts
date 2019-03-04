import { UserRole } from '../enums/UserRole';

export interface User {
    id: number;
    name: string;
    role: UserRole;
    email: string;
}
