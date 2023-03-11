import fs from 'fs';
import path from 'path';
import compareTwoObjects from './compare.js';

const parser = (filePath) => {
  const data = fs.readFileSync(path.resolve(process.cwd(), filePath));
  return JSON.parse(data);
};

const genDiff = (filepath1, filepath2) => {
    return compareTwoObjects(parser(filepath1), parser(filepath2));
};
export default genDiff;
