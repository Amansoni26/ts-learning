"use strict";
// 01-basic-types.ts
// Topic: TypeScript Basic Types + Type Inference
// What this shows: how TypeScript catches type mistakes
// before the code even runs
Object.defineProperty(exports, "__esModule", { value: true });
// Explicit type annotations
let username = "Aman";
let age = 28;
let isActive = true;
// Arrays
let testNames = ["Aman", "Sudeep", "Sumeet"];
let scores = [90, 100, 100];
// Tuple — fixed length, each position has its own type
let userInfo = ["Aman", 28];
// Type inference — no annotation needed, TypeScript figures it out
let role = "QA"; // inferred as string
let experience = 4; // inferred as number
// void — function that returns nothing
function greet(name) {
    console.log(`Hello, ${name}`);
}
// Function with return type
function addScores(a, b) {
    return a + b;
}
greet(username);
console.log(addScores(85, 90));
console.log(testNames);
console.log(userInfo);
//# sourceMappingURL=01-basic-types.js.map