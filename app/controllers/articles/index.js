import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ArticlesIndexController extends Controller {
  queryParams = ['tag'];

  @tracked tag = null;

  @tracked model;

  get filteredArticles() {
    let tag = this.tag;
    let { articles, tags } = this.model;

    if (tag) {
      return articles.filter((article) => article.tagList.includes(tag));
    }
    return articles;
  }
}
