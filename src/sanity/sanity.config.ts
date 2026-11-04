import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./env";
import { schema } from "./schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "OAU Intelligent Systems Studio",
  schema,
  plugins: [structureTool()],
});