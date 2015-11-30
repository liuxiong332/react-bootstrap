import React from 'react';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import {mapClassNames} from './utils/classNameUtils';

const Row = React.createClass({
  propTypes: {
    /**
     * You can use a custom element for this component
     */
    componentClass: elementType
  },

  getDefaultProps() {
    return {
      componentClass: 'div'
    };
  },

  render() {
    let ComponentClass = this.props.componentClass;

    return (
      <ComponentClass {...this.props} className={classNames(this.props.className, mapClassNames('row'))}>
        {this.props.children}
      </ComponentClass>
    );
  }
});

export default Row;
