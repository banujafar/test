import Head from "next/head";
import posts from "@/posts.json";
import seo from "@/seo/index";

// Fetch all possible slugs at build time

const Post = ({ post }) => {
  if (!post) {
    return <p>Post not found</p>;
  }

  const imageUrl = `https://test-w18z.onrender.com/content/img/${post.image}?v=${new Date().getTime()}`;
  const pageParams = {
    post: post,
    imageUrl: imageUrl,
  };

  return (
    <>
      <Head>{seo(pageParams)}</Head>

      <main>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <img src={imageUrl} alt={post.title} />
        <div>{post.body}</div>
      </main>
    </>
  );
};
export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false }; // fallback false means any paths not returned by getStaticPaths will result in a 404 page
}

// Fetch data for a specific post based on the slug
export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  return {
    props: {
      post,
    },
  };
}

export default Post;
