import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | profiles/show/favorites', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:profiles/show/favorites');
    assert.ok(route);
  });
});
