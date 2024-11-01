// components/SEO.js
const seo = ({ post, imageUrl }) => {
  return (
    <>
      <title>{post?.title}</title>
      <meta name="description" content={post?.description} />
      {/* Open Graph tags */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post?.title} />
      <meta property="og:description" content={post?.description} />
      <meta content={imageUrl || ""} property="og:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta
        property="og:url"
        content={`https://test-w18z.onrender.com/posts/${post?.slug}`}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@nytimesbits" />
      <meta name="twitter:creator" content="@nickbilton" />
      <meta name="twitter:image" content={imageUrl || ""} />
      {/* Twitter tags */}
    </>
  );
};

export default seo;
