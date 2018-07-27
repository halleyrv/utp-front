import Ember from 'ember';
import Route from '@ember/routing/route';
import { inject } from '@ember/service'; 
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin, {
  sessionAccount: Ember.inject.service(),
  beforeModel() {
    this.get('sessionAccount').loadCurrentUser();
  }
});