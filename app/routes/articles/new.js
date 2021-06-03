import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ArticlesNewRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model() {
    let tags = await fetch(`https://conduit.productionready.io/api/tags`)
      .then((res) => res.json())
      .then((res) => res.tags);

    return { tags };
  }
}
