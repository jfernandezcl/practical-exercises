import { readFile } from "node:fs";
import fs from "node:fs/promises";

export function config({ path = ".env" } = {}) {
  try {
    const env = fs.readFile(path, "utf8");
    const line = env.split("\n");
  } catch (error) {
    console.error(e);
  }
}

const dotenv = {
  config,
};

export default dotenv;
