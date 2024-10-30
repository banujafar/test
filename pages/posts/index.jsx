// pages/posts/index.js
import Link from "next/link";
import posts from '@/posts.json';

const Posts = () => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.slug}`}>
                                <h2>{post.title}</h2>
                                <p>{post.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
