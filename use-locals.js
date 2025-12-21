'use strict';

const React = require('react');
const { HexoContext } = require('./lib/HexoContext');

module.exports.useLocals = () => {
  const locals = React.useContext(HexoContext)
  if (!locals) throw new TypeError('HexoContext is missing! It is most likely a bug of hexo-renderer-jsx, please report issue here: https://github.com/hexojs/hexo-renderer-jsx/issues/new');
  return locals;
}
