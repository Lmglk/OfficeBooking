import { Role } from '../enums/Role';

export interface User {
    id: number;
    name: string;
    role: Role;
    email: string;
}
