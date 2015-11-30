import React from 'react';
import ValidComponentChildren from './utils/ValidComponentChildren';
import classNames from 'classnames';
import tbsUtils from './utils/bootstrapUtils';
import {mapClassNames} from './utils/classNameUtils';

const Badge = React.createClass({
  propTypes: {
    pullRight: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      pullRight: false,
      bsClass: 'badge'
    };
  },

  hasContent() {
    return ValidComponentChildren.hasValidComponent(this.props.children) ||
      (React.Children.count(this.props.children) > 1) ||
      (typeof this.props.children === 'string') ||
      (typeof this.props.children === 'number');
  },

  render() {
    let classes = {
      'pull-right': this.props.pullRight,
      [tbsUtils.prefix(this.props)]: this.hasContent()
    };
    return (
      <span
        {...this.props}
        className={classNames(this.props.className, mapClassNames(classes))}>
        {this.props.children}
      </span>
    );
  }
});

export default Badge;
