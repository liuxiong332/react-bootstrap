import _ from 'lodash-compat';
import getBaseConfig from './base.config';

export default _.extend({}, getBaseConfig(), {
  output: {
    pathinfo: true
  },

  devtool: 'eval'
});
