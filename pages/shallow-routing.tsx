import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {};

const ShallowRouting: React.FC<Props> = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/shallow-routing?counter=10", undefined, { shallow: true });
  }, [router]);

  useEffect(() => {
    console.log("The counter changed");
  }, [router.query.counter]);

  return <div>shallow-routing</div>;
};

export default ShallowRouting;
