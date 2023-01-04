export interface IOrder {
  nNf: string;
  value: string;
  buyerId: number;
  providerId: number;
  orderStatusBuyer: string;
  createdAt: Date;
}
