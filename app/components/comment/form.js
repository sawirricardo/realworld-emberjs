import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CommentFormComponent extends Component {
  @tracked errorMessage;
  @tracked comment;
  @tracked onSuccessCreated = false;

  @action
  async createComment(e) {
    e.preventDefault();

    await fetch(`https://conduit.productionready.io/api/users/login`)
      .then((res) => res.json())
      .then((res) => {
        this.onSuccessCreated = true;
        this.comment = '';
      })
      .catch((err) => (this.errorMessage = JSON.stringify(err)));
  }

  updateComment(e) {
    this.comment = e.target.value;
  }
}
