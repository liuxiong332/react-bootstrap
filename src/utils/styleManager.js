
export default {
  setStyles(styles) {
    this.styles = styles;
  },

  getStyles() {
    return this.styles || (this.styles = require('../../styles/bootstrap'));
  }
};
