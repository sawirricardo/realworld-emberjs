import EmberRouter from '@ember/routing/router';
import config from 'realworld-emberjs-20210602/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('articles', function () {
    this.route('show', { path: '/:slug' });
    this.route('new');
    this.route('edit', { path: '/:slug/edit' });
    this.route('feed');
  });

  this.route('profiles', function () {
    this.route('show', { path: '/:username' }, function () {
      this.route('favorites');
    });
  });

  this.route('users', function () {
    this.route('new');
    this.route('login');
    this.route('edit', { path: '/setting' });
  });
});
