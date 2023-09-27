const { wrapper } = require('@blendededge/ferryman-extensions');
const { processMethod } = require('../utils.js');

async function processAction(msg, cfg, snapshot, headers, tokenData = {}) {
  const wrapped = await wrapper(this, msg, cfg, snapshot, headers, tokenData);
  this.logger.debug('msg:  ', msg);
  this.logger.debug('cfg:  ', cfg);
  this.logger.debug('snapshot: ', snapshot);
  const TOKEN = cfg.token || tokenData.apiKey;
  return processMethod.call(wrapped, msg, cfg, snapshot, TOKEN);
}

exports.process = processAction;
