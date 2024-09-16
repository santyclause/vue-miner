<script setup>
import { AppState } from './AppState.js';
import { computed, ref } from 'vue';
import { upgradesService } from './services/UpgradesService.js';


const manualUpgrades = AppState.upgrades.filter((upgrade) => upgrade.type == 'manual');
const autoUpgrades = AppState.upgrades.filter((upgrade) => upgrade.type == 'auto');

const clickRate = computed(() => {
  return upgradesService.getRate(manualUpgrades);
});

const autoRate = computed(() => {
  return upgradesService.getRate(autoUpgrades);
});

const currentWarpstone = computed(() => {
  let current = AppState.warpstone - AppState.spentWarpstone;
  return current;
});


</script>

<template>
  <header>
    <h1 class="title">Moon Miner</h1>
  </header>
  <main>
    <img src="assets/img/morrslieb.png" alt="Morrslieb" class="img-fluid">
  </main>
  <footer class="container-fluid">
    <section class="row justify-content-center align-items-end">
      <div class="col-md-2 d-flex justify-content-end align-items-center bgm-darker">
        <p>+{{ clickRate }}<i class="mdi mdi-cursor-default-click-outline"></i></p>
      </div>
      <div class="col-md-3 d-flex justify-content-between align-items-center bgm-dark">
        <img src="assets/img/warpstone-a.png" alt="warpstone" class="img-fluid">
        <p>{{ currentWarpstone }}</p>
      </div>
      <div class="col-md-2 d-flex align-items-center bgm-darker">
        <p>+{{ autoRate }}<i class="mdi mdi-clock-outline"></i></p>
      </div>
    </section>
    <section class="row bgm-dark">
      <div class="col-md-6">
        <div class="p-5 bgm-darker">
          <section class="row">
            <div class="col-12">
              <h3>CLICK UPGRADES</h3>
              <div>
                <!-- TODO click upgrades -->
              </div>
            </div>
          </section>
          <section class="row">
            <h3>AUTO UPGRADES</h3>
            <div>
              <!-- TODO Auto Upgrades -->
            </div>
          </section>
        </div>
      </div>
      <div class="col-md-6">
        <div class="p-5 bgm-darker">
          <section class="row">
            <h3>CLICK STATS</h3>
            <div>
              <!-- TODO Click stats -->
            </div>
          </section>
          <section class="row">
            <h3>AUTO STATS</h3>
            <div>
              <!-- TODO Auto stats -->
            </div>
          </section>
        </div>
      </div>
    </section>
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';
// :root {
//   --main-height: calc(100vh - 32px - 64px);
// }

.bgm-dark {
  background-color: var(--dark);
}

.bgm-darker {
  background-color: var(--darker);
}

.bgm-darker h3 {
  color: var(--primary);
  font-weight: 500;
}

.informational {
  border-radius: 10px 10px 0px 0px;
  color: var(--primary);
}

.title {
  color: var(--dark);
  text-shadow: 5px 5px 0px var(--primary);
  font-weight: 900;
}
</style>
