import React from 'react';
import PropTypes from 'prop-types';

export default function label(props) {
    return (
        <label className={props.className}>
            {props.children}
        </label>
    );
}
label.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};
