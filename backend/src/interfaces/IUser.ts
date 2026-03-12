export interface IUser {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  birthday: Date;
  phone: string;
  dni: string;
  address: string;
  zipCode: string;
  nationality: string;
}

export interface ICredentials {
    email: string;
    password: string;
}
