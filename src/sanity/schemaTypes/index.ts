// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { donde } from "./donde";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [donde],
}
