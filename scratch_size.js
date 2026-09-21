const { exec } = require('child_process');
const fs = require('fs');
const files = fs.readdirSync('public/clientlogos').filter(f => f.endsWith('.png'));
const paths = files.map(f => 'public/clientlogos/' + f).join(' ');
exec('npx image-size ' + paths, (err, stdout) => {
  console.log(stdout);
});
