<template>
  <div id="app">
    <div class="content">
      <h1>Dunamic Background Table</h1>
      <DynamicBackgroundTable />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DynamicBackgroundTable from "./components/DynamicBackgroundTable.vue";

@Component({
  components: {
    DynamicBackgroundTable
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
