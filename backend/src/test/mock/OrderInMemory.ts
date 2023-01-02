import { data } from "./mock"
import OrderController from "../../controllers/OrderController";

export default class OrderInMemory  {
  private all = data;

  async findAll() {
    return this.all;
  }
}
  