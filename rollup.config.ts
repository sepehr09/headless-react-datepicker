import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.ts",
    output: [{ dir: "dist/esm", format: "esm" }],
    external: ["react", "react-dom", "react/jsx-runtime"],
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true,
        include: ["src/**/*.ts", "src/**/*.tsx"],
        // keep test/story files out of the published bundle's typecheck
        tsconfigOverride: {
          exclude: [
            "src/**/*.test.ts",
            "src/**/*.test.tsx",
            "src/**/*.stories.tsx",
            "src/stories",
          ],
        },
      }),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ dir: "dist/cjs", format: "cjs" }],
    external: ["react", "react-dom", "react/jsx-runtime"],
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: "./tsconfig.cjs.json",
        useTsconfigDeclarationDir: true,
        include: ["src/**/*.ts", "src/**/*.tsx"],
        tsconfigOverride: {
          compilerOptions: {
            module: "esnext",
          },
          // keep test/story files out of the published bundle's typecheck
          exclude: [
            "src/**/*.test.ts",
            "src/**/*.test.tsx",
            "src/**/*.stories.tsx",
            "src/stories",
          ],
        },
      }),
      terser(),
    ],
  },
  {
    input: "src/styles.css",
    output: [
      {
        dir: "dist",
      },
    ],
    plugins: [
      postcss({
        plugins: [require("autoprefixer")],
        extract: true,
        minimize: true,
        config: false,
      }),
    ],
  },
];
