export interface IOrder {
  nNf: string;
  value: string;
  buyerID: number;
  providerID: number;
  orderStatusBuyer: string;
  createdAt: Date;
}

export interface IOrderResponse {
  nNf: string;
  value: string;
  orderStatusBuyer: string;
  createdAt: Date;
  buyer: object;
  provider: object;
}
