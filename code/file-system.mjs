import { statSync } from "node:fs";
const stats = statSync("../assets/example.txt");

console.log(
  stats.isFile(),
  stats
)
