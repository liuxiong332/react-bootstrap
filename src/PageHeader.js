import React from 'react';
import classNames from 'classnames';
import {mapClassNames} from './utils/classNameUtils';

const PageHeader = React.createClass({
  render() {
    return (
      <div {...this.props} className={classNames(this.props.className, mapClassNames('page-header'))}>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
});

export default PageHeader;
