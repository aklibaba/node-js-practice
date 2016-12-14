const fs = require('fs'),
    path = require('path');

let md = `
Sample Markdown File
=============

Sample Subtitle
---------

* point1
* point2
* point3
`;

fs.writeFile(
    path.join(__dirname, 'data', 'sample.md'),
    md.trim(),
    () =>
    {
        console.log('file created');
    }
);