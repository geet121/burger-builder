import React from 'react';

import classes from './BControl.css';

const bControl = (props) => (
  // console.log('[BControls]');
  <div className={classes.BControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.added}>
      More
    </button>
  </div>
);
export default bControl;
