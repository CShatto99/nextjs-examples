import { useRouter } from "next/router";

type Props = {};

const CatchAllRoute: React.FC<Props> = () => {
  const router = useRouter();
  const query = router.query;

  return <div>Query Object: {JSON.stringify(query)}</div>;
};

export default CatchAllRoute;
