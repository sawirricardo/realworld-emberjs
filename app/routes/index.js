import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let articles = await fetch(
      `https://conduit.productionready.io/api/articles`
    )
      .then((res) => res.json())
      .then((res) => res.articles);

    let tags = await fetch(`https://conduit.productionready.io/api/tags`)
      .then((res) => res.json())
      .then((res) => res.tags);
    return { articles, tags };
  }
}
