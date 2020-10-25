import * as fs from "fs";

export const readLines = (path: string) => {
  const content = fs.readFileSync(path, "utf-8");

  return content.trim().split("\n");
}