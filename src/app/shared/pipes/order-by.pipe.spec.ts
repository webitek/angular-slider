import { OrderPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderPipe();
    expect(pipe).toBeTruthy();
  });
});
