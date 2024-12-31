import BlogCard from "@/components/BlogCard";

import { client } from "../../../sanity/lib/client";


export default async function Home() {
  const query = `*[_type=='post'] | order(publishedAt desc) {
    title,
    summary,
    image {
      asset->{
        _id,
        url
      }
    },
    "slug": slug.current
  }`;
  
const posts = await client.fetch(query)
  console.log(posts)
  return (
   <main className="flex min-h-screen flex-col px-32">
    <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark-text-2xl">
      MOST RECENT BLOGS
    </h1>
    <section className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-12">
      {posts.map((post:Post)=>(
        <BlogCard post={post} key={post.slug}/>
      ))}
    </section>

   </main>
  );
}
