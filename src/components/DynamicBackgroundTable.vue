<template>
  <div class="dynamic-background-table">
    <button v-on:click="setRandomValues">Set Random Values</button>
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Calory</th>
      </tr>
      <tr>
        <td>Apple</td>
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
        <td>Orange</td>
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
        <td>Banana</td>
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
import { Component, Vue } from "vue-property-decorator";
import { TweenLite } from "gsap";

@Component
export default class SimpleList extends Vue {
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
    this.setRandomValues();
  }

  setRandomValues() {
    const newPrice1 = Math.round(Math.random() * 100);
    TweenLite.to(this.$data, 1, {
      price1: newPrice1
    }).eventCallback("onStart", () => {
      this.displayPrice1 = newPrice1;
    });
    const newPrice2 = Math.round(Math.random() * 100);
    TweenLite.to(this.$data, 1, {
      price2: newPrice2
    }).eventCallback("onStart", () => {
      this.displayPrice2 = newPrice2;
    });
    const newPrice3 = Math.round(Math.random() * 100);
    TweenLite.to(this.$data, 1, {
      price3: newPrice3
    }).eventCallback("onStart", () => {
      this.displayPrice3 = newPrice3;
    });
    const newCalory1 = Math.round(Math.random() * 100);
    TweenLite.to(this.$data, 1, {
      calory1: newCalory1
    }).eventCallback("onStart", () => {
      this.displayCalory1 = newCalory1;
    });
    const newCalory2 = Math.round(Math.random() * 100);
    TweenLite.to(this.$data, 1, {
      calory2: newCalory2
    }).eventCallback("onStart", () => {
      this.displayCalory2 = newCalory2;
    });
    const newCalory3 = Math.round(Math.random() * 100);
    TweenLite.to(this.$data, 1, {
      calory3: newCalory3
    }).eventCallback("onStart", () => {
      this.displayCalory3 = newCalory3;
    });
  }
}
</script>

<style scoped lang="scss">
.dynamic-background-table th {
  width: 300px;
}
</style>
