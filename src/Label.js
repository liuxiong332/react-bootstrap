import React from 'react';
import classNames from 'classnames';
import bootstrapUtils, { bsStyles, bsClass } from './utils/bootstrapUtils';
import { State, DEFAULT, PRIMARY } from './styleMaps';
import {mapClassNames} from './utils/classNameUtils';

@bsClass('label')
@bsStyles(State.values().concat(DEFAULT, PRIMARY), DEFAULT)
class Label extends React.Component {

  render() {
    let classes = bootstrapUtils.getClassSet(this.props);

    return (
      <span {...this.props} className={classNames(this.props.className, mapClassNames(classes))}>
        {this.props.children}
      </span>
    );
  }
}

export default Label;
