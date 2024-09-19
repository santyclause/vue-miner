import { computed, reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'
import { upgradesService } from './services/UpgradesService.js';
import { Helper } from './models/Helper.js';

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  upgrades : [
    new Upgrade({name: 'Pickaxe', type: 'manual', price: 50, amount: 1, qty: 1}),
    new Upgrade({name: 'Drill', type: 'manual', price: 500, amount: 10}),
    new Upgrade({name: 'Dynamite', type: 'manual', price: 5000, amount: 100}),
    new Upgrade({name: 'Ratstronaut', type: 'auto', price: 1000, amount: 13}),
    new Upgrade({name: 'Pack Rat Pack', type: 'auto', price: 10000, amount: 131.3}),
    new Upgrade({name: 'Mining Colony', type: 'auto', price: 100000, amount: 1313})
  ],
  // manualUpgrades : this.upgrades.filter((upgrade) => upgrade.type == 'manual'),
  // autoUpgrades : this.upgrades.filter((upgrade) => upgrade.type == 'auto'),
  helpers : [
    new Helper({name: 'Lurk', type: 'Ratstronaut', top: 20, left: 20, rot: 0})
  ],
  warpstone : 0,
  spentWarpstone : 0
})

export const clickRate = computed(() => {
  return upgradesService.getRate(AppState.upgrades.filter(u => u.type == 'manual'));
});

export const autoRate = computed(() => {
  return upgradesService.getRate(AppState.upgrades.filter(u => u.type == 'auto'));
});

