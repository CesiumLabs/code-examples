import path from "path";
import fs from "fs";
const metadata = (pat) => {
  const name = path.basename(pat);
  const data = fs.readFileSync(pat);
  const obj = {
    name: name,
    data: data,
  };

  return obj;
};

export default metadata;
