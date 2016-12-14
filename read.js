const fs = require('fs'),
    path = require('path');

fs.readdir('./data', (err, files) =>
{
    //iterate through the files arr
    files.forEach((file) =>
                  {
                      let absPath = path.join(__dirname, 'data', file);
                      let stats = fs.statSync(absPath);
                      
                      if (stats.isFile()
                          && file !== '.idea'
                          && absPath !== __filename)
                      {
                          fs.readFile(absPath, 'utf8', (err, contents) =>
                          {
                              console.log(`${absPath}: ${contents}`);
                          })
            
                      }
                  })
});


// fs.readFile('./fil1.txt', 'UTF-8', (err, contents) =>
// {
//     if (err)
//     {
//         throw err;
//     }
//
//
//     console.log(contents);
//
// });

