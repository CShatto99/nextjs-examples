import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

const Post: React.FC<Props> = () => {
  const router = useRouter();
  const { post } = router.query;

  return (
    <div>
      <h1>Post Title: {post}</h1>
      <Link href={`/blog/${post}/${post}_comment`}>Post Comment</Link>
    </div>
  );
};

export default Post;
