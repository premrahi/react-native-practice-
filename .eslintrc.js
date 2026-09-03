   const path = require('path');

   module.exports = {
     root: true,
     extends: '@react-native',
     overrides: [
       {
         files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
         parserOptions: {
           requireConfigFile: false,
           babelOptions: {
             configFile: path.resolve(__dirname, 'babel.config.js'),
           },
         },
       },
     ],
   };