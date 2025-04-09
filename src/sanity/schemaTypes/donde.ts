import { defineField, defineType } from "sanity";

export const donde = defineType({
  name: "donde",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Enlace",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      type: "image",
      title: 'Imagen principal',
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Texto alternativo" },
      ],
    }),
    // 👇 Array de multimedia ilimitado
    defineField({
      name: "gallery",
      type: "array",
      title: "Galería multimedia",
      of: [
        { type: "image", options: { hotspot: true } }, // Imágenes
        { type: "file", options: { accept: "video/*" } }, // Videos
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "coverImage",
    },
  },
});
