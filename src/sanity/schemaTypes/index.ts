import { authorType } from "./authorType";
import { postType } from "./postType";
import { projectType } from "./projectType";

export const schema = {
  types: [postType, authorType, projectType],
};