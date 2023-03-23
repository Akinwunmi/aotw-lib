const colors = require('./colors.json');
const fs = require('fs');

const colorCodes = {
  100: 97,
  200: 88,
  300: 80,
  400: 67,
  500: 51,
  600: 37,
  700: 23
};
const colorPrefix = '--aotw-color-';
const colorVariables = [];

Object.entries(colors).map(([colorName, values]) => {
  let name, value;
  if (!values.range) {
    name = `${colorPrefix}${colorName}${colorName === 'black' || colorName === 'white' ? '' : '-500'}`;
    value = `hsl(${values.hue},${values.saturation}%,${values.lightness || 51}%)`;
    colorVariables.push({ [name]: value });
    return;
  }
  Object.entries(colorCodes).map(([colorCode, lightness]) => {
    name = `${colorPrefix}${colorName}-${colorCode}`;
    value = `hsl(${values.hue},${values.saturation}%,${lightness}%)`;
    colorVariables.push({ [name]: value });
  });
});

const colorVariablesObject = colorVariables.reduce((obj, variable) =>
  (obj[Object.keys(variable)[0]] = Object.values(variable)[0], obj), {}
);

const colorVariablesStringified = ':root' + JSON.stringify(colorVariablesObject).replace(/"/g, '').replace(/:/g, ': ').replace(/,/g, ', ').replace(/\),/g, ');');
if (!fs.existsSync('./dist')){
  fs.mkdirSync('./dist');
}
fs.writeFileSync('./dist/colors.css', colorVariablesStringified);
fs.writeFileSync('./src/tokens/colors.css', colorVariablesStringified);
