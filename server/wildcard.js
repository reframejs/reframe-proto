const {getApiResponse} = require('wildcard-api');

require('../api');

module.exports = {
  name: 'wildcard-hapi-plugin',
  register: async server => {
    server.route({
      method: '*',
      path: '/wildcard/{param*}',
      handler: async (request, h) => {
        const requestProps = {
          body: request.payload,
          url: request.url,
          method: request.method,
        };

        const responseProps = await getApiResponse(requestProps);

        const resp = h.response(responseProps.body);
        resp.code(responseProps.statusCode);
        resp.type(responseProps.contentType);
        return resp;
      }
    });
  },
};
