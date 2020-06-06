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

  get priceSum() {
    return this.price1 + this.price2 + this.price3;
  }

  get calorySum() {
    return this.calory1 + this.calory2 + this.calory3;
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
    const product1 = this.products[0];
    const product2 = this.products[1];
    const product3 = this.products[2];

    this.name1 = product1.name;
    this.name2 = product2.name;
    this.name3 = product3.name;

    TweenLite.to(this.$data, 1, {
      price1: product1.price
    }).eventCallback("onStart", () => {
      this.displayPrice1 = product1.price;
    });
    TweenLite.to(this.$data, 1, {
      price2: product2.price
    }).eventCallback("onStart", () => {
      this.displayPrice2 = product2.price;
    });
    TweenLite.to(this.$data, 1, {
      price3: product3.price
    }).eventCallback("onStart", () => {
      this.displayPrice3 = product3.price;
    });
    TweenLite.to(this.$data, 1, {
      calory1: product1.calory
    }).eventCallback("onStart", () => {
      this.displayCalory1 = product1.calory;
    });
    TweenLite.to(this.$data, 1, {
      calory2: product2.calory
    }).eventCallback("onStart", () => {
      this.displayCalory2 = product2.calory;
    });
    TweenLite.to(this.$data, 1, {
      calory3: product3.calory
    }).eventCallback("onStart", () => {
      this.displayCalory3 = product3.calory;
    });
  }
}
</script>

<style scoped lang="scss">
.dynamic-background-table th {
  width: 300px;
}
</style>
