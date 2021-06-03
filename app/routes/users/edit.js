import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UsersEditRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model() {
    return await fetch(`https://conduit.productionready.io/api/user`)
      .then((res) => res.json())
      .then((res) => res.user);
  }
}
