import { useRouter } from "next/router";

type Props = {};

const Comment: React.FC<Props> = () => {
  const router = useRouter();
  const query = router.query;

  return <div>{JSON.stringify(query)}</div>;
};

export default Comment;
