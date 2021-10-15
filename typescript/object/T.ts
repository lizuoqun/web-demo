function fn<T>(name: T): T {
  return name;
}

console.log(fn(10));
console.log(fn<string>("name"));

interface inter {
  length: number;
}

function fn1<T extends inter>(a: inter): number {
  return a.length;
}

console.log(fn1({ length: 45 }));


