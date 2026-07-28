import fs from "fs";
import path from "path";
import { glob } from "glob";

const translationsDir = path.resolve("src/translations");

const files = glob.sync(`${translationsDir}/*.json`);

for (const file of files) {
  const messages = JSON.parse(fs.readFileSync(file, "utf-8"));

  const sortedMessages = Object.fromEntries(
    Object.entries(messages).sort(([a], [b]) =>
      a.localeCompare(b),
    ),
  );

  fs.writeFileSync(
    file,
    JSON.stringify(sortedMessages, null, 2) + "\n",
  );

  console.log(`Sorted ${file}`);
}