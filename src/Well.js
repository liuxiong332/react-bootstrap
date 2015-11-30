import React from 'react';
import classNames from 'classnames';
import bootstrapUtils, { bsSizes, bsClass } from './utils/bootstrapUtils';
import { Sizes } from './styleMaps';
import {mapClassNames} from './utils/classNameUtils';

@bsClass('well')
@bsSizes([Sizes.LARGE, Sizes.SMALL])
class Well extends React.Component {
  render() {
    let classes = bootstrapUtils.getClassSet(this.props);

    return (
      <div {...this.props} className={classNames(this.props.className, mapClassNames(classes))}>
        {this.props.children}
      </div>
    );
  }
}

export default Well;
