import clear from "rollup-plugin-clear";
import ts from "rollup-plugin-typescript2";

import pkg from "./package.json" assert { type: "json" };

export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [clear({ targets: ["dist/"] }), ts()],
  external: ["screeps-api", "git-rev-sync", "fs", "path"],
};
