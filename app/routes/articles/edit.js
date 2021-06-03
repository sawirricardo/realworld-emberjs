import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ArticlesEditRoute extends Route {
  @service session;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model(params) {
    let article = await fetch(
      `https://conduit.productionready.io/api/articles/${params.slug}`
    )
      .then((res) => res.json())
      .then((res) => res.article);
    return article;
  }
}
