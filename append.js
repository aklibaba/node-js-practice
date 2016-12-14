const fs = require('fs'),
    path = require('path');

const dataDir = path.join(__dirname, 'data');
const lastNumberFile = path.join(dataDir, 'lastNumber.txt');
const fileToAppend = path.join(dataDir, 'sample.md');

let lastNumber,
    data;

fs.readFile(
    lastNumberFile,
    'utf8',
    (err, contents) =>
    {
        lastNumber = contents;
        
        data = `\n* point${lastNumber}\n`;
    
        fs.appendFile(
            fileToAppend,
            data.replace('\t', ''),
            (err) =>
            {
                if (err) throw err;
                console.log('the data was appended to the file');
            }
        );
        
        fs.writeFile(lastNumberFile, Number(lastNumber)+ 1, 'utf8');
        
    });


