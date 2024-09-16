import { AppState } from "@/AppState.js";

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
}

export const warpstoneService = new WarpstoneService();