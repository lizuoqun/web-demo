import { hi } from "./demo";
function sum(a: number, b: number): number {
  return a + b;
}
console.log(hi);

const obj = { name: "yueyue" };
console.log(obj);

obj.name = "dayueyeu";
console.log(obj);

let fn = (a: number, b: number) => a + b;

const p = new Promise((resolve, reject) => {});
console.log(p)