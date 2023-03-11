#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

const printFileDiff = (filepath1, filepath2) => {
  console.log(genDiff(filepath1, filepath2));
};

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .arguments('<path1> <path2>')
  .action(printFileDiff);

program.parse();
