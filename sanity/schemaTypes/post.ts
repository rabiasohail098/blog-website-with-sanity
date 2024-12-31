// import { Rule } from "postcss"
// import { defineArrayMember,defineField,defineType } from "sanity"
// export default defineType({
//     name:"post",
//     type:"document",
//     title:"Post",
//     fields:[
//         defineField({
//             name:"title",
//             type:"string",
//             title:"title",
//             validation:Rule=>Rule.required()
//          }),
//          //  summary
//         defineField({
//             name:"summary",
//             type:"string",
//             title:"Summary",
//             validation:Rule=>Rule.required()
//         }),
//         //  slug field
//         defineField({
//             name: "slug",
//             type: "slug",
//             title: "Slug",
//             options: {
//               source: "title", // Use the title field to generate the slug
//               maxLength: 200, // Limit the length of the slug
//               slugify: (input) =>
//                 input
//                   .toLowerCase() // Convert to lowercase
//                   .replace(/\s+/g, "-") // Replace spaces with hyphens
//                   .replace(/[^a-z0-9-]/g, ""), // Remove special characters
//             },
//             validation: (Rule) => Rule.required(), // Make slug field required
//           }),
        
//         // image
//         defineField({
//             name:"image",
//             type:"image",
//             title:"Image",
// }),
// defineField({
//     name:"content",
//     type:"array",
//     title:"Content",
//     of:[defineArrayMember({
//         type:"block"
//     })
// ]
// }),
// defineField({
//     name:"author",
//     type:"reference",
//     title:"Author Ref",
//     to:[
//        {
//         type:"author"
//        }
//     ]
// })
//     ]

// })

import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      type: "string",
      title: "Summary",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author Ref",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published At", // Add this if it's missing!
      validation: (Rule) => Rule.required(),
    }),
  ],
});
