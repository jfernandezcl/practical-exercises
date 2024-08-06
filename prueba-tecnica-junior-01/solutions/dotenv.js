import { readFile } from "node:fs";
import fs from "node:fs/promises";

export function config({ path = ".env" } = {}) {
  try {
    const env = fs.readFile(path, "utf8");
    const lines = env.split("\n");

    lines.forEach((line) => {
      const [key, ...value] = line.split("=");
      const joinedValue = value.join("=");
    });
  } catch (error) {
    console.error(e);
  }
}

const dotenv = {
  config,
};

export default dotenv;
