import { Product } from "@/types/product";

const data: Product[] = [
  { id: 1, name: "商品A", price: 100, calory: 400 },
  { id: 2, name: "商品B", price: 200, calory: 500 },
  { id: 3, name: "商品C", price: 300, calory: 600 },
  { id: 4, name: "商品D", price: 400, calory: 700 },
  { id: 5, name: "商品E", price: 500, calory: 800 },
  { id: 6, name: "商品F", price: 600, calory: 900 },
  { id: 7, name: "商品G", price: 700, calory: 1000 },
  { id: 8, name: "商品H", price: 800, calory: 1100 },
  { id: 9, name: "商品I", price: 900, calory: 1200 },
  { id: 10, name: "商品J", price: 1000, calory: 400 }
];

class ProductApi {
  fetch() {
    return this.random(3);
  }

  random(limit: number) {
    const tmpData = data.slice();
    const result = [];
    for (let i = 0; i < limit; i++) {
      const index = Math.floor(Math.random() * tmpData.length);
      result.push(tmpData[index]);
      tmpData.splice(index, 1);
    }
    return result;
  }
}

export const productApi = new ProductApi();
