import { defineType, defineField } from "sanity";

export default defineType({
  name: "menuSection",
  title: "Menu Section",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "items",
      title: "Menu Items",
      type: "array",
      of: [

        {
  name: "menuItem",
  title: "Menu Item",
  type: "object",

  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({

      name:"thumbnail",
      title: "Thumbnail",
      type: "image"
    }),

    defineField({
      name: "dietary",
      title: "Dietary Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Vegetarian", value: "V" },
          { title: "Vegan", value: "VG" },
          { title: "Gluten Free", value: "GF" },
        ],
      },
    }),
  ],
}

      ],
    }),
  ],
});