import { defineConfig } from "tsup";

export default defineConfig({
  outDir: "dist",
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  external: ["react", "react-dom"],
  splitting: false,
  treeshake: true,
  sourcemap: true,
  dts: true,
  clean: true,
});
