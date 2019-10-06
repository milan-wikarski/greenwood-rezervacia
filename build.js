const F = require('@creanet/js-file');
const Mustache = require('mustache');

(async () => {
  const template = await F.read(__dirname + '/src/template.mustache');

  const view = {
    style: await F.read(__dirname + '/src/style.css', 'utf8'),
    js: await F.read(__dirname + '/src/index.js', 'utf8')
  };

  console.log(view.js);

  F.write(__dirname + '/out/out.html', Mustache.render(template, view));
})();
