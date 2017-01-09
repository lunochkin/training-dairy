const _get = require('lodash/get');

export const getAuthToken = state => _get(state, ['global', 'token']);
