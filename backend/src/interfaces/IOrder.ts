export interface IOrder {
  nNf: string;
  value: string;
  buyerID: number;
  providerID: number;
  orderStatusBuyer: string;
  createdAt: Date;
}
