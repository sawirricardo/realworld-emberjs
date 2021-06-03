import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProfilesShowRoute extends Route {
  @service session;

  async model(params) {
    let profile = await fetch(
      `https://conduit.productionready.io/api/profiles/${params.username}`
    )
      .then((res) => res.json())
      .then((res) => res.profile);

    let articles = await fetch(
      `https://conduit.productionready.io/api/articles?author=${params.username}`
    )
      .then((res) => res.json())
      .then((res) => res.articles);
    return { profile, articles };
  }
}
