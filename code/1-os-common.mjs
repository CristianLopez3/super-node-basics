import { platform, release, arch, cpus, freemem, totalmem } from "node:os";

console.log("Operative system information");
console.log("-----------------------------");

console.log("OS Name: " + platform());
console.log("OS Version: " + release());
console.log("OS Architecture: " + arch());
console.log(cpus());
console.log("Free Memory: " + freemem() / 1024 / 1024);
console.log("Total memory: " + totalmem() / 1024 / 1024);


