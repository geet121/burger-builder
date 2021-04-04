import React from 'react';
import classes from './NavItem.css';

const navitem = (props) => {
  // console.log('[navitem.js]');
  return (
    <li className={classes.NavItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}{' '}
      </a>
    </li>
  );
};
export default navitem;
