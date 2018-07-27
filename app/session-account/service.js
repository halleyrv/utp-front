import Service from '@ember/service';

export default Service.extend({
   session: Ember.inject.service(),
  store: Ember.inject.service(),
  loadCurrentUser() {
    if (this.get('session.isAuthenticated')) {
      this.get('store')
      .queryRecord('user', { me: true })
      .then((user) => {
        this.set('currentUser', user);
      });
    }
  }
});
