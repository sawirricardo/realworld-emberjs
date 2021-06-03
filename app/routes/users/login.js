import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UsersLoginRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.get('session').prohibitAuthentication('index');
  }
}
