const { format } = require('../helpers/utils');
const logger = require('../config/winston');

exports.getUpTime = (req, res) => {
  logger.info(`Response uptime : ${format(process.uptime())}`);
  res.send({ uptime: format(process.uptime()) });
};
