<template>
  <div id="app">
    <div class="content">
      <div class="content-header">
        <h1 class="content-header__title">Dynamic Background Table</h1>
        <button class="content-header__button" v-on:click="fetchProducts">
          Fetch Prodcuts
        </button>
      </div>
      <DynamicBackgroundTable v-bind:products="products" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DynamicBackgroundTable from "./components/DynamicBackgroundTable.vue";
import { productApi } from "@/api/products";
import { Product } from "@/types/product";

@Component({
  components: {
    DynamicBackgroundTable
  }
})
export default class App extends Vue {
  products: Product[] = [];

  created() {
    this.products = productApi.fetch();
  }

  fetchProducts() {
    this.products = productApi.fetch();
  }
}
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

.content-header {
  display: flex;

  &__title {
    margin: 0px 20px 60px 0px;
  }

  &__button {
    height: 40px;
    background-color: white;
    border: 2px solid black;
    border-radius: 5%;
    font-weight: bolder;
  }
}
</style>
