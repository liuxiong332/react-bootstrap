import React from 'react';
import classNames from 'classnames';
import bootstrapUtils from './utils/bootstrapUtils';
import Button from './Button';
import {mapClassNames} from './utils/classNameUtils';

const ButtonToolbar = React.createClass({

  propTypes: {
    bsSize: Button.propTypes.bsSize
  },

  getDefaultProps() {
    return {
      bsClass: 'btn-toolbar'
    };
  },

  render() {
    let classes = bootstrapUtils.getClassSet(this.props);

    return (
      <div
        {...this.props}
        role="toolbar"
        className={classNames(this.props.className, mapClassNames(classes))}>
        {this.props.children}
      </div>
    );
  }
});

export default ButtonToolbar;
