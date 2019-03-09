import { SendUserParameters } from './SendUserParameters';

export interface RegistrationParameters extends SendUserParameters {
    confirmPassword: string;
}
