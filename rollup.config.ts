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
        tsconfigOverride: {
          compilerOptions: {
            module: "esnext",
          },
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
        plugins: [require("tailwindcss"), require("autoprefixer")],
        extract: true,
        minimize: true,
        config: false,
      }),
    ],
  },
];
