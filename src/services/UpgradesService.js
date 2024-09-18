class UpgradesService {
  buyItem(upgrade) {
    upgrade.qty++;
    upgrade.price += Math.round(upgrade.price * 0.10);
  }

  getRate(upgrades) {
    let rate = 0;
    upgrades.forEach(upgrade => rate += upgrade.amount * upgrade.qty);
    return rate;
  }
}

export const upgradesService = new UpgradesService();