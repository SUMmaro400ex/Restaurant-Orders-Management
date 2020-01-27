import uuidv4 from 'uuid/v4';
import { IAPIOrder } from '../queries/queries';


export enum status {
  CANCELLED = 'cancelled',
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  FULFILLED = 'fulfilled'
}
const threeMinutesMS = 3 * 60 * 1000;
class Order {
  private _order: IAPIOrder;
  createdAt: number;
  id: string;
  status: status;
  constructor(order: IAPIOrder, notifyOnInProgress: (order: Order) => void ) {
    this._order = order;
    this.id = uuidv4();
    this.createdAt = Date.now();
    this.status = status.PENDING;
    setTimeout(() => {
      // if the order isnt cancelled, notify that its now in progress
      if (this.status === status.CANCELLED) return;
      this.status = status.IN_PROGRESS;
      notifyOnInProgress(this);
    }, threeMinutesMS)
  }

  get recipe() {
    return this._order.recipe;
  }

  cancel() {
    this.status = status.CANCELLED;
  }

  fulfill() {
    this.status = status.FULFILLED;
  }

}

export default Order;
