const moment = require('moment');
const chalk = require('chalk');

const prelude = () => (
  `${chalk.dim('[')}` +
  `${chalk.yellow(
    '𝒮 ' + moment(new Date()).format('hh:mm:ss')
  )}` +
  `${chalk.dim(']')} `
);

const json = j => typeof j === 'object'
  ? JSON.stringify(j)
  : j;

const Log = function(opts, ...lines) {
  if (typeof opts !== 'object') { lines = [opts, ...lines]; }

  let display = lines
    .map(i => prelude() + chalk[opts.color || 'white']( json(i) ))
    .join('\n');

  console.log.call(console, display);
};

Log.error = Log.bind(null, {color: 'red'});
Log.info = Log.bind(null, {color: 'blue'});
Log.success = Log.bind(null, {color: 'green'});
Log.warning = Log.warn = Log.bind(null, {color: 'yellow'});

module.exports = Log;