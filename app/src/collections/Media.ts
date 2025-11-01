import type { CollectionConfig } from "payload";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: true,
  fields: [],
};

export default Media;