const fs = require('fs');

fs.readFile(__dirname + '/template.mustache', 'utf8', (err, template) => {
  if (err) return console.log(err);

  fs.readFile(__dirname + '/style.css', 'utf8', (err, style) => {
    if (err) return console.log(err);

    fs.writeFileSync(
      __dirname + '/out.html',
      template.replace('{{style}}', style)
    );
  });
});
