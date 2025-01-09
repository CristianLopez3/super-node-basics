// import { readFile } from "node:fs"; // using callbacks
import { readFile } from "node:fs/promises";

const PATH_TO_FILE = "../assets/example.txt";
const PATH_TO_FILE_2 = "../assets/example2.txt";
const UTF = "utf-8";

console.log("Reading first file..")
readFile(PATH_TO_FILE, UTF)
  .then(text => {
    console.log("First Text: " + text)
  })
  .catch(err => console.log(err));

console.info(" --> Doing things while the file is reading")


// Using CallBacks
console.log("Reading second file...");
readFile(PATH_TO_FILE_2, UTF)
  .then(text => console.log("Second text: " + text))
  .catch(err => console.log(err));

/**
readFile(PATH_TO_FILE_2, UTF, (err, text) => {
  console.log("Second file: " + text);
});
*/

