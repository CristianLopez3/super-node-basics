const os = require("node:os");

console.log("Operative system information");
console.log("-----------------------------");

console.log("OS Name: " + os.platform());
console.log("OS Version: " + os.release());
console.log("OS Architecture: " + os.arch());
console.log(os.cpus());
console.log("Free Memory: " + os.freemem() / 1024 / 1024);
console.log("Total memory: " + os.totalmem() / 1024 / 1024);
