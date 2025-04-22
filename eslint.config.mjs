import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginQuery from "@tanstack/eslint-plugin-query";

const __filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...pluginQuery.configs["flat/recommended"],
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;