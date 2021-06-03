import Model, { attr } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr title;
  @attr slug;
  @attr description;
  @attr body;
  @attr user;
  @attr createdAt;
  @attr updatedAt;
}
