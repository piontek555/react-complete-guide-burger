import React from 'react';

import classes from './backdrop.css';

const backdrop = (props) => {
    props.show ? <div className={classes.backdrop}></div> : null;
};

export default backdrop;