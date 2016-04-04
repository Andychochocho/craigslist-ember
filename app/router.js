import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('apartment', { path: '/apartment/:apartment_post-num'});
  this.route('house', { path: '/house/:house_post-num'});
});

export default Router;
