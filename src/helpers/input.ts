import * as fs from "fs";

export const readTextFile = (path: string) => {
  return fs.readFileSync(path, "utf-8");
}

export const readLines = (path: string) => {
  const content = readTextFile(path);

  return content.trim().split("\n");
}

export const readArray = (path: string) => {
  const content = readTextFile(path);

  return content.trim().split(",");
}