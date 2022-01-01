import Link from "next/link";

type Props = {};

const CypressEx: React.FC<Props> = () => {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default CypressEx;
