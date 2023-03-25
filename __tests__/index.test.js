import fs from 'fs';
import genDiff from '../src/index.js';

test('gendiff', () => {
    expect(genDiff('/home/markelov/frontend-project-46/__fixtures__/file1.json', '/home/markelov/frontend-project-46/__fixtures__/file2.json')).toEqual(fs.readFileSync('/home/markelov/frontend-project-46/__fixtures__/jsonResult.txt', 'utf-8'));
  });