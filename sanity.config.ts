import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  projectId: "7xk0i7va",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [],
  },
});
