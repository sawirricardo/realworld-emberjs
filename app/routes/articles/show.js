import Route from '@ember/routing/route';

export default class ArticlesShowRoute extends Route {
  async model(params) {
    let article = await fetch(
      `https://conduit.productionready.io/api/articles/${params.slug}`
    )
      .then((res) => res.json())
      .then((res) => res.article);

    let user = await fetch(`https://conduit.productionready.io/api/profiles/`);

    let comments = await fetch(
      `https://conduit.productionready.io/api/articles/${params.slug}/comments`
    )
      .then((res) => res.json())
      .then((res) => res.comments);

    return { article, comments };
  }
}
