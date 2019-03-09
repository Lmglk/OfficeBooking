import { UserRole } from '../../authorization/enums/UserRole';

export interface User {
    id: number;
    name: string;
    role: UserRole;
    email: string;
}
