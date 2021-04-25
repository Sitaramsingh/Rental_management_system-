import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function card(props) {
    return (
        <div className={'cardContainer' + ' ' + props.className}>
            <img src={props.src}/>
            <p className='bottomBar' onClick={props.handleClick}>{props.name} <i className='arrow'></i></p>
        </div>
    );
}
card.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    name: PropTypes.string,
    handleClick: PropTypes.func
};
  
