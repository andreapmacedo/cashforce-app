import OrderInMemory from './mock/OrderInMemory';

let orderInMemory: OrderInMemory;

describe('OrderService', () => {
  beforeEach(async () => {
    orderInMemory = new OrderInMemory();
  });

  it('should be able to find all orders', async () => {
    const orders = await orderInMemory.findAll();
    expect(orders[0].nNf).to.be.equal(
      "18153"
    );

  });
});