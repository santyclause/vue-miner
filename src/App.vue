<script setup>
import { AppState } from './AppState.js';
import { computed, ref, reactive } from 'vue';
import { upgradesService } from './services/UpgradesService.js';
import { warpstoneService } from './services/WarpstoneService.js';


const manualUpgrades = AppState.upgrades.filter((upgrade) => upgrade.type == 'manual');
const autoUpgrades = AppState.upgrades.filter((upgrade) => upgrade.type == 'auto');

const clickRate = computed(() => {
  return upgradesService.getRate(manualUpgrades);
});

const autoRate = computed(() => {
  return upgradesService.getRate(autoUpgrades);
});

const currentWarpstone = computed(() => {
  return warpstoneService.getCurrentWarpstone();
});

function clickMoon() {
  warpstoneService.addWarpstone(clickRate.value);
}

function buyItem(upgrade) {
  warpstoneService.spendWarpstone(upgrade.price);
  upgradesService.buyItem(upgrade);
}

</script>

<template>
  <header class="mt-5">
    <h1 class="text-center title">Moon Miner</h1>
  </header>
  <main>
    <div class="d-flex justify-content-center moon-cont">
      <img v-on:click="clickMoon()" src="./assets/img/morrslieb.png" alt="Morrslieb" class="img-fluid moon">
    </div>
  </main>
  <footer class="container-fluid">
    <section class="row justify-content-center align-items-end">
      <div class="col-md-2 d-flex justify-content-end align-items-center bgm-darker informational">
        <h4>+{{ clickRate }}<i class="mdi mdi-cursor-default-click-outline"></i></h4>
      </div>
      <div class="col-md-3 d-flex justify-content-between align-items-center bgm-dark informational">
        <img src="./assets/img/warpstone-a.png" alt="warpstone" class="img-fluid warpstone-img">
        <h1>{{ currentWarpstone }}</h1>
      </div>
      <div class="col-md-2 d-flex align-items-center bgm-darker informational">
        <h4>+{{ autoRate }}<i class="mdi mdi-clock-outline"></i></h4>
      </div>
    </section>
    <section class="row bgm-dark">
      <div class="col-md-6 p-5">
        <section class="row p-3 bgm-darker h-100">
          <div class="col-md-6">
            <h4>CLICK UPGRADES</h4>
            <div v-for="upgrade in manualUpgrades" :key="upgrade.name" class="d-flex upgrade mb-1">
              <div class="btn-cont">
                <button v-on:click="buyItem(upgrade)" class="btn-upg" :disabled="upgrade.price > currentWarpstone">{{ upgrade.price }}</button>
              </div>
              <div>
                <p>{{ upgrade.name }}</p>
                <p>+{{ upgrade.amount }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h4>AUTO UPGRADES</h4>
            <div v-for="upgrade in autoUpgrades" :key="upgrade.name" class="d-flex upgrade mb-1">
              <div class="btn-cont">
                <button v-on:click="buyItem(upgrade)" class="btn-upg" :disabled="upgrade.price > currentWarpstone">{{ upgrade.price }}</button>
              </div>
              <div>
                <p>{{ upgrade.name }}</p>
                <p>+{{ upgrade.amount }} / 3s</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="col-md-6 p-5">
        <section class="row p-3 bgm-darker h-100">
          <div class="col-md-6">
            <h4>CLICK STATS</h4>
            <div v-for="upgrade in manualUpgrades" :key="upgrade.name" class="d-flex justify-content-between align-items-center mb-1 stats">
              <div class="stat">{{ upgrade.qty }}</div>
              <p>{{ upgrade.name }}</p>
              <i class="mdi mdi-arrow-right-bold"></i>
              <div class="stat">{{ upgrade.qty * upgrade.amount }}</div>
            </div>
          </div>
          <div class="col-md-6">
            <h4>AUTO STATS</h4>
            <div v-for="upgrade in autoUpgrades" :key="upgrade.name" class="d-flex justify-content-between align-items-center mb-1 stats">
              <div class="stat">{{ upgrade.qty }}</div>
              <p>{{ upgrade.name }}</p>
              <i class="mdi mdi-clock-outline"></i>
              <div class="stat" :style="{fontSize: `${upgrade.qty}px` }"> {{ upgrade.qty * upgrade.amount }}</div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </footer>
</template>

<style lang="scss">
@import '@/assets/scss/main.scss';
// :root {
//   --main-height: calc(100vh - 32px - 64px);
// }

p { 
  margin: 0;
}

.bgm-dark {
  background-color: var(--dark);
}

.bgm-darker {
  background-color: var(--darker);
}

.bgm-darker h4 {
  color: var(--primary);
  font-weight: 500;
}

.title {
  color: var(--dark);
  text-shadow: 5px 5px 0px var(--primary);
  font-weight: 900;
  font-size: 4rem;
}

.moon-cont {
  position: relative;
  margin: 3%;
}

.moon {
  width: 20%;
}

.informational {
  border-radius: 10px 10px 0px 0px;
  color: var(--primary);
  min-height: 5em;
  padding:0.5em 1em;
}

.warpstone-img {
  width: 20%;
}

.upgrade {
  color: var(--light);
}

.btn-cont {
  width: 30%;
  margin-right: 5%;
}

.btn-upg {
  color: var(--dark);
  border-radius: 10px;
  background-color: var(--primary);
  box-shadow: 0px 5px 0px var(--primaryDarker);
  border:none;
  font-weight: 900;
  width: 100%;
  padding: 0.5em 1em;
}

.btn-upg:disabled {
  box-shadow: none;
  background-color: var(--primaryDarker);
}

.stats {
  color: var(--light);
  padding: 0 2em;
}

.stat {
  width: 45px;
  height:45px;
  display:flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--light);
  border-radius: 10px;
  color: var(--primary);
  font-weight: 600;
}

</style>
