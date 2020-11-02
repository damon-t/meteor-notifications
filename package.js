Package.describe({
  name: 'odem:notifications',
  summary: "Adds notification functionality",
  version: "0.3.1",
  git: "https://github.com/damon-t/meteor-notifications"
});

both = ['client', 'server'];

Package.onUse(function(api) {
  api.versionsFrom('1.8');

  api.use(
      [
        'coffeescript@1.0.17',
        'templating@1.3.2',
        'less',
        'tracker',
        'mrt:moment@1.7.0',
        'aldeed:simple-schema@1.5.4',
        'aldeed:autoform@6.3.0',
      ],
      both);

  api.addFiles(
      [
        'lib/both/schemas.coffee',
        'lib/both/collections.coffee'
      ],
      both);

  api.addFiles(
      [
        'lib/client/templates.html',
        'lib/client/templates.coffee',
        'lib/client/helpers.coffee',
        'lib/client/tracker.coffee',
        'lib/client/style.less'
      ],
      'client');

  api.addFiles(
      [
        'lib/server/allow.coffee',
        'lib/server/publish.coffee',
        'lib/server/methods.coffee'
      ],
      'server');
});
