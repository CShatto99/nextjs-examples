import Link from "next/link";

type Props = {};

const postTitles = ["Post 1", "Post 2", "Post 3", "Post 4"];

const blog: React.FC<Props> = () => {
  return (
    <div style={{ padding: "2rem" }}>
      {postTitles.map(post => (
        <Link key={post} href={`/blog/${encodeURIComponent(post)}`}>
          {post}
        </Link>
      ))}
    </div>
  );
};

export default blog;
