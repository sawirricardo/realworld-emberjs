import Route from '@ember/routing/route';

export default class ArticlesIndexRoute extends Route {
  async model() {
    let tags = await fetch(`https://conduit.productionready.io/api/tags`)
      .then((res) => res.json())
      .then((res) => res.tags);

    let articles = await fetch(
      `https://conduit.productionready.io/api/articles`
    )
      .then((res) => res.json())
      .then((res) => res.articles);

    return { articles, tags };
  }
}
