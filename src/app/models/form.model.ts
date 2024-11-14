export interface FormModel {
  personalInfo?: {
    firstName: string;
    lastName: string;
    email: string;
  };
  address?: {
    street: string;
    city: string;
    zipCode: string;
  };
  preferences?: {
    newsletter: boolean;
    emailFormat?: string;
    frequency?: string;
    topics?: string[];
    terms: boolean;
  };
}