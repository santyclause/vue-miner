import { AppState, autoRate } from "@/AppState.js";

class WarpstoneService {
  spendWarpstone(price) {
    AppState.spentWarpstone += price;
  }

  getCurrentWarpstone() {
    let current = AppState.warpstone - AppState.spentWarpstone;
    return current;
  }

  addWarpstone(rate) {
    AppState.warpstone += rate;
  }

  startAutoTimer() {
    setInterval(() => {
      this.addWarpstone(Math.round(autoRate.value))
    }, 3000)
  }
}

export const warpstoneService = new WarpstoneService();