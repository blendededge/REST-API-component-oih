const { wrapper } = require('@blendededge/ferryman-extensions');
const { processMethod } = require('../utils.js');

async function processTrigger(msg, cfg, snapshot, headers, tokenData = {}) {
  const wrapped = await wrapper(this, msg, cfg, snapshot, headers, tokenData);
  // eslint-disable-next-line no-param-reassign
  msg.body = {};
  this.logger.debug('msg:  ', msg);
  this.logger.debug('cfg:  ', cfg);
  const TOKEN = cfg.token || tokenData.apiKey;
  return processMethod.call(wrapped, msg, cfg, snapshot, TOKEN);
}

exports.process = processTrigger;
