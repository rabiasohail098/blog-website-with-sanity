import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post }: any) => {
  return (
    <div>
       {post.image?.asset?.url && (
        <Image src={post.image.asset.url} alt={post.title} width={300} height={200} />
      )}
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
      <Link href={`/blog/${post.slug.current}`}>
        <button>View Details</button>
      </Link>
     
    </div>
  );
};

export default BlogCard;