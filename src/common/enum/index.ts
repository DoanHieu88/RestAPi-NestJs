export enum AuthType {
  Admin = 'Admin',
  Customer = 'Customer',
}

export class DecodeJwtDto {
  id: string;
  email: string;
  role: string;
}
