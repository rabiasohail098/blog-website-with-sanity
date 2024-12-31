import { defineType,defineField } from "sanity";
export default defineType({
    name:"author",
    type:"document",
    title:"Author",
    fields:[
        defineField({
            name:"name",
            type:"string",
            title:"Name",
   }),
   defineField({
    name:"bio",
    type:"text",
    title:"Author Bio",
}),
defineField({
    name:"image",
    type:"image",
    title:"Image",
    options:{
        hotspot:true
    }
}),
    ]
})