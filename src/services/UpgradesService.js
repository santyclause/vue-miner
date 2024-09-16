import { AppState } from "@/AppState.js";

class UpgradesService {
  buyItem(upgrade) {
    upgrade.qty++;
  }
  getRate(upgrades) {
    let rate = 0;
    upgrades.forEach(upgrade => rate += upgrade.amount * upgrade.qty);
    return rate;
  }
}

export const upgradesService = new UpgradesService();