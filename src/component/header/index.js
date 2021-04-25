import React from 'react';
import PropTypes from 'prop-types';
import  './index.css';

export default function Index(props) {
    return (
        <header className='header'>
                <p className='headerLogoText'>{props.title}</p>
                <div className='childrenClass'>
                    {props.children}
                </div>
        </header>
    );
}

Index.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object
}
