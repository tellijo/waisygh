'use strict';

import User from './user.object';
import Promise from 'bluebird';

export default {
  method: 'POST',
  path: '/users',
  handler: (req, res) => {
    var user = new User();
    return user
      .import(req.payload)
      .call('save')
      .then(user => res(user).code(200))
    ;
  }
};
