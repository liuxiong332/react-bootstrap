import React from 'react';
import classNames from 'classnames';
import tbsUtils, { bsClass } from './utils/bootstrapUtils';
import {mapClassNames} from './utils/classNameUtils';

class ModalFooter extends React.Component {
  render() {
    return (
      <div
        {...this.props}
        className={classNames(this.props.className, mapClassNames(tbsUtils.prefix(this.props, 'footer')))}>
        {this.props.children}
      </div>
    );
  }
}

ModalFooter.propTypes = {
  /**
   * A css class applied to the Component
   */
  bsClass: React.PropTypes.string
};

ModalFooter.defaultProps = {
  bsClass: 'modal'
};

export default bsClass('modal', ModalFooter);
