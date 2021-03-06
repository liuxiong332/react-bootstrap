import React, { PropTypes } from 'react';
import tbsUtils from './utils/bootstrapUtils';
import {mapClassNames} from './utils/classNameUtils';

let NavbarToggle = React.createClass({

  propTypes: {
    /**
     * The toggle content, if left empty it will render the default toggle (seen above).
     */
    children: PropTypes.node
  },

  contextTypes: {
    $bs_navbar_bsClass: PropTypes.string,
    $bs_navbar_onToggle: PropTypes.func,
  },

  render() {
    let { children, ...props } = this.props;
    let {
      $bs_navbar_bsClass: bsClass = 'navbar',
      $bs_navbar_onToggle: onToggle
    } = this.context;

    return (
      <button type="button"
        onClick={onToggle}
        className={mapClassNames(tbsUtils.prefix({ bsClass }, 'toggle'))}
      >
        { children || [
          <span className={mapClassNames("sr-only")} key={0}>Toggle navigation</span>,
          <span className={mapClassNames("icon-bar")} key={1}></span>,
          <span className={mapClassNames("icon-bar")} key={2}></span>,
          <span className={mapClassNames("icon-bar")} key={3}></span>
        ]
        }
      </button>
    );
  }
});

export default NavbarToggle;
