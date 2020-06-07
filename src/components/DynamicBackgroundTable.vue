<template>
  <div class="dynamic-background-table">
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Calory</th>
      </tr>
      <tr>
        <td>{{ name1 }}</td>
        <td
          v-bind:style="{
            background: priceBackGround(price1)
          }"
        >
          {{ displayPrice1 }} 円
        </td>
        <td
          v-bind:style="{
            background: caloryBackGround(calory1)
          }"
        >
          {{ displayCalory1 }} kcal
        </td>
      </tr>
      <tr>
        <td>{{ name2 }}</td>
        <td
          v-bind:style="{
            background: priceBackGround(price2)
          }"
        >
          {{ displayPrice2 }} 円
        </td>
        <td
          v-bind:style="{
            background: caloryBackGround(calory2)
          }"
        >
          {{ displayCalory2 }} kcal
        </td>
      </tr>
      <tr>
        <td>{{ name3 }}</td>
        <td
          v-bind:style="{
            background: priceBackGround(price3)
          }"
        >
          {{ displayPrice3 }} 円
        </td>
        <td
          v-bind:style="{
            background: caloryBackGround(calory3)
          }"
        >
          {{ displayCalory3 }} kcal
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { TweenLite } from "gsap";
import { Product } from "@/types/product";

const duration = 0.5;

@Component
export default class DynamicBackgroundTable extends Vue {
  @Prop()
  products!: Product[];

  name1 = "";
  name2 = "";
  name3 = "";
  price1 = 0;
  price2 = 0;
  price3 = 0;
  calory1 = 0;
  calory2 = 0;
  calory3 = 0;
  displayPrice1 = 0;
  displayPrice2 = 0;
  displayPrice3 = 0;
  displayCalory1 = 0;
  displayCalory2 = 0;
  displayCalory3 = 0;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // MEMEO: Object[key]() （ブラケット記法）のために型安全を崩している

  get priceSum() {
    let sum = 0;
    for (const product of this.products) {
      sum += product.price;
    }
    return sum;
  }

  get calorySum() {
    let sum = 0;
    for (const product of this.products) {
      sum += product.calory;
    }
    return sum;
  }

  priceBackGround(value: number) {
    const ratio = Math.round((value / this.priceSum) * 100);
    return `linear-gradient(to right, skyblue ${ratio}%, #ffffff ${ratio}%)`;
  }

  caloryBackGround(value: number) {
    const ratio = Math.round((value / this.calorySum) * 100);
    return `linear-gradient(to right, pink ${ratio}%, #ffffff ${ratio}%)`;
  }

  created() {
    this.updateDynamically();
  }

  @Watch("products")
  onProductsChanged() {
    this.updateDynamically();
  }

  updateDynamically() {
    for (const [index, product] of this.products.entries()) {
      const nameKey = `name${String(index + 1)}`;
      const priceKey = `price${String(index + 1)}`;
      const caloryKey = `calory${String(index + 1)}`;
      const displayPriceKey = `displayPrice${String(index + 1)}`;
      const displayCaloryKey = `displayCalory${String(index + 1)}`;

      this[nameKey] = product.name;

      TweenLite.to(this.$data, duration, {
        [priceKey]: product.price
      }).eventCallback("onStart", () => {
        this[displayPriceKey] = product.price;
      });

      TweenLite.to(this.$data, duration, {
        [caloryKey]: product.calory
      }).eventCallback("onStart", () => {
        this[displayCaloryKey] = product.calory;
      });
    }
  }
}
</script>

<style scoped lang="scss">
.dynamic-background-table th {
  width: 300px;
}
</style>
