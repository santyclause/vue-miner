export class Helper {
  constructor(data) {
    this.name = data.name
    this.type = data.type
    this.top = data.top
    this.left = data.left
    this.rot = data.rot
  }

  get emoji() {
    switch (this.type) {
      case 'Ratstronaut':
        return '🐀';
      case 'Pack Rat Pack':
        return '🐀💰🐀💰🐀';
      case 'Mining Colony':
        return '🏫';
      default:
        return '?';
    }
  }
}