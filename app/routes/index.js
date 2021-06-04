const slackRoutes = require('@routes/slack/slack.route');
const parseRoutes = require('@routes/parse/parse.route');

const routes = [slackRoutes, parseRoutes];

module.exports = (app) => {
  app.use('/api', routes);
};
