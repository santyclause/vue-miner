export class Upgrade {
  constructor(data) {
    this.name = data.name,
    this.type = data.type || 'manual',
    this.price = data.price,
    this.amount = data.amount,
    this.qty = data.qty || 0
  }
}