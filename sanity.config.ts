import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  projectId: "7xk0i7va",
  dataset: "production",
  plugins: [structureTool()],
  schema,
});
