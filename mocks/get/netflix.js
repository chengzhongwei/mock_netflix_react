const netflix = require('../data/netflix');

module.exports = {
  path: '/data',
  method: 'GET',
  template() {
    return JSON.parse(JSON.stringify(netflix));
  },
};