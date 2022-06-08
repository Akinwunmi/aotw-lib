import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

export default {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },
  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  }
};

console.log(
  chalk.red(`
       ___       ___     _______   _   _   _
    '  ___  ' '  ___  ' '__   __' | | | | | |
    | |___| | | |   | |    | |    | | | | | |
    |  ___  | | |   | |    | |    | | | | | |
    | |   | | | |___| |    | |    | |_| |_| |
    |_|   |_| '  ___  '    |_|    ' __' '__ '
  `)
);