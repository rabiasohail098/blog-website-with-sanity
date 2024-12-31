import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { PortableText } from "next-sanity";


type Post = {
  title: string;
  summary: string;
  content: any;
  image?: {
    asset: {
      url: string;
    };
  };
  author?: {
    name: string;
    bio: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
};

export default async function BlogPost({ params: slug  }: { params: { slug: string } }) {
  const query = `*[_type=="post" && Slug.current == $slug]{
    title,
    summary,
    image {
      asset->{
        url
      }
    },
    content,
    author->{
      name,
      bio,
      image {
        asset->{
          url
        }
      }
    }
  }[0]`;

  const post: Post | null = await client.fetch(query).then((res) => res[0]);
const imageUrl = post?.image?.asset?.url;
const imageUrl2 = post?.author?.image?.asset?.url;
  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div>
      {/* Post Title */}
      <h1  className="text-xl sm:text-2xl text-center underline lg:text-3xl mb-4 text-yellow-200 font-bold text-outline">{post.title}</h1>

      {/* Post Summary */}
      <p  className="text-base text-outline text-center mb-8 sm:text-lg lg:text-xl  text-green-200 underline">{post.summary}</p>

      {/* Post Image (with width and height for Next.js Image optimization) */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={post.title}
          width={600} // Adjust width as per your requirement
          height={400} // 
          // Adjust height as per your requirement
          className="rounded-lg object-cover w-full h-[400px] mb-8"
        />
      )}
<div className="flex gap-6 px-8">
   {/* Author Image (with width and height) */}
   {imageUrl2 && (
        <Image
          src={imageUrl2}
          alt="Author Image"
          width={100} // Adjust width as per your requirement
          height={100}
          className="rounded-full w-[200px] h-[200px]" // Adjust height as per your requirement
        />
      )}
      <div>
      {/* Author Info */}
      <h2 className="text-xl sm:text-2xl lg:text-3xl mb-4 text-blue-200 font-bold text-outline">{post.author?.name}</h2>
      <p className="text-base text-outline sm:text-lg lg:text-xl  text-gray-200 underline">{post.author?.bio}</p>
      </div>
     
      </div>
      <section className=" my-16 text-pink-300 text-[20px]
      prose-h2:text-2xl sm:text-2xl prose-h1:text-center space-y-8 lg:text-3xl mb-4 prose-h2:text-yellow-200 font-bold text-outline
      prose-h1:text-[30px] prose-h3:text-pink-300 prose-h2:text-left  prose-h2:text-outline
      prose-h3:text-lg prose-h1:text-blue-200 prose-h3:text-left prose-h3:text-outline
      prose-p:text-base prose-p:text-justify prose-p:text-gray-200 prose-p:text-outline">
      <PortableText value={post.content} 
     />
    
      </section>
    </div>
  );
}
