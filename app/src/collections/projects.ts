import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "tags",
      type: "array",
      fields: [
        { name: "name", type: "text" },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "notebookUrl",
      type: "text",
      required: false,
    },
    {
      name: "projectUrl",
      type: "text",
      required: false,
    },
  ],
};