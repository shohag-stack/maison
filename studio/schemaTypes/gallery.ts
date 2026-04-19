import { defineType, defineField } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Gallery Title",
      type: "string",
      initialValue: "Restaurant Gallery",
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "galleryImage",
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),

            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),

            defineField({
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: [
                  { title: "All", value: "all" },
                  { title: "dishesh", value: "dishesh" },
                  { title: "Food", value: "food" },
                  { title: "Team", value: "team" },
                  { title: "Events", value: "events" },
                ],
              },
            }),
          ],

          preview: {
            select: {
              media: "image",
              title: "caption",
            },
          },
        },
      ],
    }),
  ],
});