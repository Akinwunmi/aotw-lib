#! /usr/bin/env node

import chalk from 'chalk';
import yargs from 'yargs';

import utils from './utils.js';

console.log(`\n${chalk.bgBlue(' Welcome to the Archive of the World CLI ')}`);

const y = yargs();
const howToUse = '\n How to use: aotw generate <component-name>';
const options = y
  .usage(howToUse)
  .option('generate', {
    alias: 'g',
    type: 'boolean',
    describe: 'Generate a LitElement of choice'
  })
  .help(true)
  .argv;

  const newElement = utils.generateElement(y.env._);
  console.log(yargs.argv);