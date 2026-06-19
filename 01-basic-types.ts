// 01-basic-types.ts
// Topic: TypeScript Basic Types + Type Inference
// What this shows: how TypeScript catches type mistakes
// before the code even runs

// Explicit type annotations

let username: string = "Aman";
let age: number = 28;
let isActive = true;


// Arrays

let testNames: string[] = ["Aman", "Sudeep", "Sumeet"];
let scores: number[] = [90, 100, 100];


// Tuple — fixed length, each position has its own type

let userInfo: [string, number] = ["Aman", 28];

// Type inference — no annotation needed, TypeScript figures it out

let role = "QA";              // inferred as string
let experience = 4;           // inferred as number


// void — function that returns nothing

function greet(name: string): void {
  console.log(`Hello, ${name}`);
}


// Function with return type

function addScores(a:number, b:number): number {
    return a + b
}

greet(username);
console.log(addScores(85, 90));
console.log(testNames);
console.log(userInfo);