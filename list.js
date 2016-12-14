const fs = require('fs');

fs.readdir('./', (err, files) =>
{
    console.log(files);
});

console.log('..loading');
