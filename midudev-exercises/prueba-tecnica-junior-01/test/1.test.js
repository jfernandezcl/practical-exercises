import { ping } from "../solutions";
import { describe, it, beforeEach, afterEach } from "node:test";
import { equal, ifError } from "node:assert/strict";
import { unlinkSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";

describe("1. ping", () => {
  it("1.1. ping midu.dev", (_, done) => {
    ping("midu.dev", (err, info) => {
      ifError(err);
      equal(info.ip, "midu.dev");
      done();
    });
  });
});
