import React from 'react';
import  './index.css';
import PropTypes from 'prop-types';

export default function Index(props) {
    return (
      <footer className='footer'>
        {props.children}
      </footer>
    );
}


Index.propTypes = {
  value: PropTypes.object
}

