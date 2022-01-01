import { useState } from "react";
import FuseResult from "fuse.js";

const names = ["Tim", "Joe", "Bel", "Max", "Lee"];

type Props = {};

const DynamicImportFuse: React.FC<Props> = () => {
  const [results, setResults] = useState<FuseResult.FuseResult<string>[]>([]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={async e => {
          const { value } = e.currentTarget;
          // Dynamically load fuse.js
          const Fuse = (await import("fuse.js")).default;
          const fuse = new Fuse(names);

          setResults(fuse.search(value));
        }}
      />
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
    </div>
  );
};

export default DynamicImportFuse;
