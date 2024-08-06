import { readFile } from "node:fs";
import fs from "node:fs/promises";

export function config({ path = ".env" } = {}) {
  try {
    const env = fs.readFile(path, "utf8");
  } catch (error) {
    console.error(e);
  }
}
