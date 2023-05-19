const fs = require("fs");
const path = require("path");
const readline = require("readline");
const colors = require("colors");

function findConstructors(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log("File or directory does not exist.");
    return;
  }

  const stat = fs.statSync(filePath);

  if (stat.isDirectory()) {
    const files = fs.readdirSync(filePath);
    const solFiles = files.filter((file) => file.endsWith(".sol"));
    solFiles.forEach((file) => {
      const fullPath = path.join(filePath, file);
      processFile(fullPath);
    });
  } else {
    processFile(filePath);
  }
}

function processFile(file) {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(file),
      crlfDelay: Infinity,
    });

    let contents = "";

    rl.on("line", (line) => {
      contents += line + "\n";
    });

    rl.on("close", () => {
      const regex = /constructor\s*\((.*?)\)\s*\{(.*?)\}/gs;
      let matches;
      while ((matches = regex.exec(contents)) !== null) {
        const args = matches[1].trim();
        const code = matches[2].trim();
        console.log(colors.green(`Constructor in ${path.basename(file)}:`));
        if (code.includes("== address(0)")) {
          console.log(colors.red("Potential 0 address check exists"));
        } else {
          console.log(colors.red("No checks for 0 address exist"));
        }
        console.log(colors.yellow(`Arguments: ${args}`));
        console.log(colors.blue(`Code: ${code}`));
        console.log("=".repeat(30));
      }
    });
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter file path or folder: ", (path) => {
  findConstructors(path);
  rl.close();
});
